const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    subject:String
})
module.exports = mongoose.model("contact",schema)