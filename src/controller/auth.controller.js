const User = require("../model/user.model");
const {body,validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user)=>{
    return jwt.sign({user:user}.process.env.SECRET_KEY)
};

const register = ("",
   async(req,res)=>{
       try {
           const errors = validationResult(req);
           if(!errors.isEmpty()){
               return res.status(401).json({errors: errors.array()});
           }

           let user = await User.findOne({emai: req.body.email});
           if(user){
            return res.status(401).json({message: "User already exists"});
           }

           user = await User.create(req.body);

           const token = newToken(user);
       } catch (error) {
        return res.status(402).json({error: error.message});
       }
   }
);

const login = async(req,res) =>{
    try {
        let user = await User.findOne({email:req.body.mail}).lean().exec();

        if(!user){
            return res.status(400).json({
                message:"Email doesn't Exists try different"
            });
        }

        const match = await user.checkPassword(req.body.passowrd);
        if(!user){
            return res.status(500).json({
                message:"Incorrect Password"
            });
        }
        const token = newToken(user);
        return res.status(200).send({token:token, user:user});

    } catch (error) {
        return res.status(500).send({error:error.message}); 
    }
}

module.exports = {register, login};