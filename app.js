const express = require('express');

const app = express.Router();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://student:student@cluster0.ykaes.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('Database not Connected')
});

mongoose.connection.on('connected',connected=>{
    console.log('Connected with Database Successfully')
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)

app.use((req,res,next)=>{
    res.status(404).json({
        error:"Bad URL Request"
    })
})

app.use((req,res,next)=>{
    res.status(200).json({
        message:"chal raha hy bhai"
    })
})

module.exports = app;