import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log('MongoDB is connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

export default connectDB;
