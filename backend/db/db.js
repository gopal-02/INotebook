import mongoose from 'mongoose';
const mongoURI ="mongodb://localhost:27017/";

const connectDB= ()=>{
    mongoose.connect(mongoURI);
    console.log('Connected to mongoDB successfully...');
    };

export default connectDB;