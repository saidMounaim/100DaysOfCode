import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useFindAndModify: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database is connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

export default connectDB;
