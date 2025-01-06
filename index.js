require("dotenv").config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const studentModal = require("./models/student.model");
const cookieParser = require("cookie-parser");

const { dbConnect } = require("./utils/db.util");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.set("view engine", "ejs");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

//loginpage
app.get("/", (req, res, next) => {
  res.render("login");
});

app.post("/login", login);

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await studentModal.findOne({
      email: email,
      password: password,
    });
    if (!user) {
      return res.render("login", { error: "Invalid credentials" });
    }
    req.session.user = user;
    return res.redirect("/studentlist");
  } catch (err) {
    console.error(err);
    return res.render("login", { error: "An error occurred" });
  }
}

async function logout(req, res, next) {
  req.session.destroy();
  return res.redirect("/login");
}

module.exports = { login, logout };

// //register page

app.get("/register", (req, res, next) => {
  res.render("register");
});

async function addstudents(req, res, next) {
  const { fullname, email, password, gender, hobbies, country } = req.body;

  const student = new studentModal({
    fullname: fullname,
    email: email,
    password: password,
    gender: gender,
    hobbies: hobbies,
    country: country,
  });

  await student.save();
  return res.redirect("/");
}

app.post("/addstudents", addstudents);

async function editstudent(req, res, next) {
  const studentId = req.params.studentId;
  const editstudent = await studentModal
    .findOne({ _id: studentId })
    .populate("fullname", "email", "password", "gender", "hobbies", "country");
  res.json(editstudent);
}

async function deleteUser(req, res, next) {
  const { deleteId } = req.body;
  console.log(deleteId);
  // const student = await studentModel.findOne({ _id: deleteId });

  // student.isActive = false;
  // await student.save();

  await StudentModel.deleteOne({ _id: deleteId });

  res.json({ success: true });
}

app.post("/deleteStudent", deleteStudent);

function setSweetalert(req, res) {
  res.locals.sweetalert = req.session.sweetalert ?? null;
  req.session.sweetalert = null;
}

module.exports = { addstudents, editstudent, deleteStudent };

// Route for //studentlist
async function students(req, res, next) {
  const students = await studentModal.find();
  return res.render("studentlist", { student: students });
}

app.get("/studentlist", students);

module.exports = { students };

dbConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("http://localhost:3000/");
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("DB ERROR");
  });
