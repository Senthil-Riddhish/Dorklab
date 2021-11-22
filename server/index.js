const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
const app=express();
const db=require('./db');
app.use(express.json());
app.use(cors());
app.use('/',require('./router'));
app.listen(process.env.port,()=>{
    console.log("server connecting...");
});