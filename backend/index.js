import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

.then(()=>{
    console.log("Database is connected");
}).catch((err)=>{
    console.log(err)
})
const app = express( );
//for allowing json oject in req body
app.use(express.json)
app.listen(5000, () => {
    console.log("Server is running in port 3000")
});

app.use("/api/auth", authRoutes)
