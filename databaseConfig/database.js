const mongoose = require("mongoose");
require("dotenv").config()
const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI, {});
        console.log("Database connected successfully!!!")
    
    }catch(error){
    console.log("Database connection Failed")
        }
}
module.exports = dbConnection;