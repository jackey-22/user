const mongoose = require("mongoose");

async function dbConnect() {
	await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB CONNECTED");
}
module.exports = { dbConnect };