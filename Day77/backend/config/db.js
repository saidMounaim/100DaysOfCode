import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useFindAndModify: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useNewUrlParser: true,
		});
		console.log('MongoDB is connected');
	} catch (error) {
		console.log(error.message);
	}
};

export default connectDB;
