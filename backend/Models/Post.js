const mongoose = require("mongoose");

function formatDate() {
    const date = new Date();
    const options = { 
        timeZone: 'Asia/Kolkata',
        weekday: 'short', 
        year: '2-digit', 
        month: 'short', 
        day: '2-digit', 
        hour: 'numeric', 
        minute: 'numeric' 
    };
    const formattedDate = date.toLocaleString('en-IN', options);
    return formattedDate;
};

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        ref: "User"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    comments: [{
        description: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        date: {
            type: String,
            default: formatDate
        }
    }],
    date: {
        type: String,
        default: formatDate
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
