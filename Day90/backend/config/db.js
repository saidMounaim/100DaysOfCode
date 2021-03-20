import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const connnect = await mongoose.connect(process.env.MONGO_URI, {
			useFindAndModify: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log('Database is connected');
	} catch (error) {
		console.log(error.message);
	}
};

export default connectDB;
