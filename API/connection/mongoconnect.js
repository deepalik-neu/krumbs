import {MongoClient} from 'mongodb';
import mongoose from 'mongoose'

const mongoURI='mongodb+srv://Abhishek:Abhishek123@cluster0.wd2nm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const conn=mongoose.connect(mongoURI);
export default conn;  