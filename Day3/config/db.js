import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb://localhost:27017/blognode', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database is connected');
	} catch (error) {
		console.log(error.message);
	}
};

export default connectDB;
