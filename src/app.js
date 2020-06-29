const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const driverRoute = require('./routes/driverRoute');
const vehicleRoute = require('./routes/vehicleRoute');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/G2L',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
let db = mongoose.connection;
db.on(`error`, console.error.bind(console, `Error connecting to database.`));

app.use('/', index);
app.use('/drivers', driverRoute);
app.use('/vehicles', vehicleRoute);

app.listen(3000, () => console.log('Listening on port 3000'));