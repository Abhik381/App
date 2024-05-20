const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt")

async function registerUser(req,res) {
    try {

        let {name , email , password , profile_pic } = req.body

       let existingUser = await userModel.findOne({email})

       if(existingUser) {
        return res.status(400).json({
            message: "User already registered",
            error: true
        })
       }

       const salt = await bcrypt.genSalt(10)

       const hashPassword = bcrypt.hash(password,salt)

       const payload = {
        name,
        email,
        password: hashPassword,
        profile_pic
       }

       const createdUser = await userModel.create(payload)

       return res.status(201).json({
        message: "User created successfully",
        data: createdUser,
        success: true
       })

    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = registerUser