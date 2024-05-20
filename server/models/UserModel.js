const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must be write your name"]
    },
    email: {
        type: String,
        required: [true, "Must be write your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Must be write your password"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
},{timestamps: true})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel