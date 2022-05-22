const express = require('express');

const app = express.Router();
const studentRoute = require('./api/routes/student')

app.use('/student',studentRoute)

app.use((req,res,next)=>{
    res.status(200).json({
        message:"chal raha hy bhai"
    })
})

module.exports = app;