const express = require("express")
const registerUser = require("../controller/registerUser")

const router = express.Router()

// user register route
router.post("/register", registerUser)

module.exports = router