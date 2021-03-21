import mongoose from 'mongoose';

const connectDb = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		});
		console.log('Database is connected');
	} catch (error) {
		console.log(error.message);
	}
};

export default connectDb;
