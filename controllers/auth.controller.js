const User = require("../models/User")
const bcrypt = require("bcryptjs");

const getAuthPage = (req, res) =>{
    res.render("login");
}

const signup = async (req, res) =>{
    try{
        const { fname, email, password } = req.body; 
    
        const user = new User({
            fname,
            email,
            password
        });

        await user.save();

        req.session.user = email;
        req.session.userName = fname;
    
        res.status(200).send({
            success: true,
            message: "User sign up successfully."
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: "User sing up failed."
        });
    }
}


const signIn = async (req, res) =>{
    try{
        const { email, password } = req.body; 
       
        const user = await User.findOne({email});


        if(!user)
        {
            res.status(404).send({
                success: false,
                message: "User not found."
            });
        }else{
            const passwordMatch = await bcrypt.compare(password, user.password);
    
            if(passwordMatch)
            {
                req.session.user = user.email;
                req.session.userName = user.fname;
            
                res.status(200).send({
                    success: true,
                    message: "User sign in successfully."
                });
            }
            else{
                res.status(404).send({
                    success: false,
                    message: "User sign in failed invalid password."
                });
            }
        }

       
    }
    catch(error){
        res.status(500).send({
            success: "false",
            message: "User sign in failed."
        });
    }
}

const logout = (req, res) =>{
    req.session.user = undefined;
    req.session.userName = undefined;
    res.send("ok");
}

module.exports = {getAuthPage, signup, signIn, logout};