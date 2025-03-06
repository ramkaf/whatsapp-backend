import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
        logger.info('MongoDB Connected Successfully');
        if (process.env.NODE_ENV !== 'production')
            mongoose.set('debug' , true)
    } catch (error) {
        logger.error('MongoDB Connection Failed:', error);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB;
