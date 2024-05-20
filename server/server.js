const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/connectDB")
const router = require("./routes/index")

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 8080

app.get("/",(req,res)=>{
    res.json({
        message: "Hello world!"
    })
})

// api endpoint create
app.use("/api", router)

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server runing at port no ${port}`);
    })
})