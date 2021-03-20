import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
