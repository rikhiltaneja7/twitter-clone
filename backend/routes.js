const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Models/User");
const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/", async(req, res) => {
    let resData
    await User.find().then((data)=>{
        resData = data
    })
    res.send(resData)
});

userRouter.post("/",async(req,res)=>{
    let postData = new User(req.body)
    await postData.save().then(()=>{
        res.send("ADDED")   
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

module.exports = userRouter;
