const { uuid } = require('uuidv4');
var Driver = require('../models/Driver');
const mongoose = require('mongoose');

exports.get = async (req, res) => {
    if (checkDbStatus){
        await Driver.find(function (err,drivers) {
            if (err) {
                return res.status(500).send('Error: ',err);
            }
            //console.log(drivers);
            return res.json(drivers);
        });
        
       /* if (drivers.length > 0){
            return res.status(404).send('No data found');
        }*/
        
    }
    return res.status(500).send('Database error');
};

exports.post = async (req, res) => {
    if (checkDbStatus){
        const { name, surname, cpf, date_of_birth } = req.body;
        const newUuid = uuid();
        const newDriver = await Driver.create({
            newUuid,
            name,
            surname,
            cpf,
            date_of_birth,
        });

        newDriver.save();

        Driver.findById(newUuid, function (err) {
            if (err) {
                return res.status(500).send('Error: ',);
            }
        });
        return res.status(201).send(`Driver created successfully!`);
    }
    return res.status(500).send('Database error');
};

exports.delete = async (req, res) => {
    if(checkDbStatus){
        const { id } = req.params.id;
        const driver = await Driver.findById(id);
        driver.active = false;
        driver.save();
        res.status(200).send('\n',driverName,' successfully deleted! ${id}\n');

    }
    return res.status(500).send('Database error');
};

function checkDbStatus(){
    if (mongoose.connection.readyState == 1){
        return true;
    }
    return false;
}