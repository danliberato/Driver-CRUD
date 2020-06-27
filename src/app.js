const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const driverRoute = require('./routes/driverRoute');
const vehicleRoute = require('./routes/vehicleRoute');

app.use('/', index);
app.use('/drivers', driverRoute);
app.use('/vehicles', vehicleRoute);

module.exports = app;