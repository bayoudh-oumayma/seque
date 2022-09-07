require('dotenv').config();
require('express-async-errors');
const express =require('express');
const sequelize = require('./shared/db');
const docR =require('./routers/doctor')
const app=express();
app.use(express.json())
// app.use(cros())
const port = process.env.port || 4000
const start=()=>{
    try{
        sequelize.sync();
    app.listen(port,()=>{
     console.log('connected');
    })
}catch(error){console.log(error);}
}

start()


app.use('/doctor',docR)