import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    tags:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]

}, { timestamps: true })



const Post = mongoose.model("Post", postSchema);
export default Post; 