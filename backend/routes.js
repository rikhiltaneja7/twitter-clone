const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Models/User");
const Post = require("./Models/Post");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const userRouter = express.Router();
const postRouter = express.Router();
var jwt = require("jsonwebtoken");
require("dotenv").config();

userRouter.use(express.json());
postRouter.use(express.json());

userRouter.get(
  "/",
  wrapAsync(async (req, res) => {
    const resData = await User.find();
    res.send(resData);
  })
);

postRouter.get(
  "/",
  wrapAsync(async (req, res) => {
    const resPost = await Post.find();
    res.send(resPost);
  })
);

userRouter.post(
  "/",
  wrapAsync(async (req, res) => {
    let newUser = new User(req.body);
    await newUser.save();
    let token = jwt.sign({ username: req.body.username }, process.env.JWT_PASS);
    res.send(token);
  })
);

userRouter.post(
  "/login",
  wrapAsync(async (req, res) => {
    // console.log(req.body)
    let { username, password } = req.body;
    let result = await User.find({ username: username });
    if (result.length == 0) {
      throw new ExpressError(404, "User not found!");
    } else {
      let savedPassword = result[0].password;
      if (savedPassword != password) {
        throw new ExpressError(401, "Wrong Password");
      } else {
        let token = jwt.sign(
          { username: req.body.username },
          process.env.JWT_PASS
        );
        res.send(token);
      }
    }
  })
);

userRouter.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

postRouter.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

module.exports = { userRouter, postRouter };
