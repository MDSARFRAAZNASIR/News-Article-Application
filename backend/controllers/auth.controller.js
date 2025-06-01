import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import {errorHandler} from "../utlis/error.js"
export const signup = async (req, res, next) => {
    const { username, email, password } = [req.body]
    if (
        !username || 
        !email || 
        !password || 
        username === "" || 
        email === "" || 
        password === ""
    ) {
        // return res.status(400).json({ message: "All the fields are required!"})
        return next(errorHandler(400, "All fields are required"))
    }
    
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })
    try {
        await newUser.save()
        res.json("SignUp Successfully")
    } catch (error) {
        next(error)
    }
}





