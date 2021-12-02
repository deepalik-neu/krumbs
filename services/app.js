import mongoose from 'mongoose';
import express from 'express'; 
import {lRouter} from '../routers/leftoverItemRoutes.js';
import {mRouter} from '../routers/menuItemRoutes.js';
import {uRouter} from '../routers/userRoutes.js';
import {rRouter} from '../routers/restaurantRoutes.js';
import {oRouter} from '../routers/orderRoutes.js';
import favicon from 'serve-favicon';
import path from 'path';
// const leftOverRouter = require('../routers/leftoverItemRoutes');
import {MongoClient} from 'mongodb';
import { APP_ROUTES } from '../constants/routes.js';
const uri = "mongodb+srv://abhishek:Abhishek123!@cluster0.eds2l.mongodb.net/krumbs?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app=express()
var router = express.Router()
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
  

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(APP_ROUTES.LEFTOVER_MENU, lRouter);
app.use(APP_ROUTES.USER_ROUTES,uRouter);
app.use(APP_ROUTES.MENU_ITEM_ROUTES,mRouter);
app.use(APP_ROUTES.ORDER_ROUTES,oRouter);
app.use(APP_ROUTES.RESTAURANT_ROUTES,rRouter);
app.use(favicon('./assets/favicon.ico'));

mongoose
.connect('mongodb+srv://Abhishek:Abhishek123@cluster0.wd2nm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,  
    }
)
.then(()=>{console.log('Connection is M Successful');}); 

//mongoose.connect(uri,{useNewUrlParser:true});
const db=mongoose.connection
db.on('error',(error)=>{console.error(error)})
db.once('open',()=>{console.log('Connected to database')});






export default app;