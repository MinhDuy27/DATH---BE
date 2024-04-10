const express = require('express');
const cors  = require('cors');
const{users,sensors,notifications} = require('./API');
const morgan = require('morgan');
module.exports = async (app) => {

    app.use(express.json()); // handle json request
    app.use(express.urlencoded({ extended:false})); // handle form data request 
    app.use(cors());// handle cors request
    app.use(morgan("dev"));
    app.use('/Uploaded-file',express.static('Uploaded-file'))
    //api
    users(app);
    sensors(app);
    notifications(app);
    app.use((req,res,next)=>{
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
    })
    
}