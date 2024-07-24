const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv")

async function signup(req, res){
    const userDetails = req.body;
    console.log({userDetails});
   
    try {
        if(!userDetails) throw Error("User details missing ");
        const {username, name, email, password} = userDetails;
        const salt = await bcrypt.genSalt(7);
        const hashpassword = await bcrypt.hash(userDetails.password, salt);
        console.log(hashpassword);

        const newUser = new User({
            username,
            name,
            email,
            password: hashpassword,
        })

        await newUser.save()
        res.status(201).json({success : 201 , message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({success : 500, message: "Error in signup"});
    }
}
async function login(req, res){
    const userDetails = req.body;
    try {
        if(!userDetails) throw Error("LOgin details are missing");
        const {email, password} = userDetails;
        const user = await User.findOne({email});
        if(!user) throw Error("User email not exist");
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw Error("Email or password is wrong");
        const token = jwt.sign({email : user._id}, "CIPHERSCHOOL", {expiresIn: "1d"});
        res.status(200).json({success: 200, token});
    } catch (error) {
        res.status(500).json({
            success: 500,
            message: "Error while logging in"
        })
        console.log(error)
    }
}

module.exports={
    signup,
    login,
}
