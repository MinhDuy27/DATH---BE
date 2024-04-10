const express = require('express');
const databaseConnection  = require('./Database/connection');
const expressApp = require('./init');
const errorHandler  = require('./Database/side-function/error-handler');
const {fetchData} = require('./Sensors')
const interval = 5000; // Interval in milliseconds (e.g., 5 seconds)
const StartServer = async() => {

    const app = express();
    
    await databaseConnection(); // connect DB
    
    await expressApp(app); // init server

    errorHandler(app);// handle error

    app.listen(process.env.Port); // init listening port

    setInterval(fetchData, interval);
}
StartServer(); 