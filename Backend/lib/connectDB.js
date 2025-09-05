import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO;
        if (!mongoURI) {
            throw new Error('MONGO environment variable is not defined');
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if database connection fails
    }
}

export default connectDB;