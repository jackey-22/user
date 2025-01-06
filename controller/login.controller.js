// const studentModal = require("../models/student.model");

// app.get("/", (req, res, next) => {
//   res.render("login");
// });

// async function login(req, res, next) {
//   try {
//     const { fullname, password } = req.body;
//     const user = await studentModal.findOne({
//       fullname,
//       password,
//       isActive: true,
//     });
//     if (!user) {
//       return res.render("login", { error: "Invalid credentials" });
//     }
//     req.session.user = user;
//     return res.redirect("/dashboard");
//   } catch (err) {
//     console.error(err);
//     return res.render("login", { error: "An error occurred" });
//   }
// }

// async function logout(req, res, next) {
//   req.session.destroy();
//   return res.redirect("/login");
// }

// module.exports = { login, logout };

// // const studentModal = require("../models/student.model");

// // app.get(req, res, next);
// // {
// //   res.render("login");
// // }

// // async function login(req, res, next) {
// //   let user;
// //   try {
// //     user = await studentModel.findOne({
// //       fullname: fullname,
// //       password: password,
// //       isActive: true,
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     return res.redirect("/login");
// //   }

// //   return res.render("login");
// // }



// // async function logout(req, res, next) {
// //   return res.redirect("/login");
// // }
// // module.exports = { login, logout };