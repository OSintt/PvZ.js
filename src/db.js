import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Mongo Service active!'));
