import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

.then(()=>{
    console.log("Database is connected");
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.listen(3000, () => {
    console.log("Server is running in port 3000")
});