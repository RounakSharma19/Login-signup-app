import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


//! Database Connection
mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database Connected");
});

//! UserSchema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//! CreateModel

const User = new mongoose.model("User", userSchema)

//! Routes
app.post("/login", (req, res) => {
    const { email, password} = req.body
    User.findOne({ email: email}, (err,user) => {
        if(user) {
            if(password === user.password) {
                res.send({message: "Login Successfully!!!!", user: user})
            } else {
                res.send({message: "Password did not match"})
            }
        } else {
            res.send({message:"User not found"})
        }
    })
})
app.post("/register", (req, res) => {
    const { name, email, password} = req.body
    User.findOne({email: email},(err, user) => {
        if(user){
            res.send({message: "User already Exists!!!!"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send({message: "Successfully Registered!!!!"})
                }
            })
        }
    })
    
})

app.listen(9002,() => {
    console.log("Back End started at port 9002");
})