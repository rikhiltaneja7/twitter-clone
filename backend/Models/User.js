const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    userProfilePic:{
        type: String,
        default: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    likedPosts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

const User = mongoose.model("User",userSchema)
module.exports = User