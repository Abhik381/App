const mongoose = require("mongoose")

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection

        connection.on("Connected", ()=>{
            console.log("Database connection successful.");
        })

        connection.on("Error", (error)=>{
            console.log("Something went wrong to connecting database ", error);
        })

    } catch (error) {
        console.log("Something went wrong ", error);
    }
}

module.exports = connectDB