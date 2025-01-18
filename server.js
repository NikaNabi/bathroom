const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/constriction',

    { useNewUrlParser:true,
        useUnifiedTorology:true,});
app.listen(5000,()=>console.log('Сервер запущен http://localhost:5000'));
const calculateRoute=require('./routes/calculate')
app.use('/api',calculateRoute);

