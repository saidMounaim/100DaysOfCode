import mongoose from 'mongoose';

const postModel = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

}, { timestamps: true })

const Post = mongoose.model("Post", postModel);

export default Post;