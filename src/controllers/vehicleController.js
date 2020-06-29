const { uuid } = require('uuidv4');
var Vehicle = require('../models/Vehicle');
var Driver = require('../models/Driver');
const mongoose = require('mongoose');

exports.get = async (req, res) => {
    await Vehicle.find(function (err,vehicles) {
        if (err) {
            return res.status(500).send('Error: ',err);
        }
        return res.json(vehicles);
    });
};

exports.post = async (req, res) => {
    const { owner_name, plate, renavam} = req.body;
    const newUuid = uuid();
    const driver = await Driver.findOne({name: owner_name});
    if(!driver){
        return res.status(404).send('Driver not found');
    }
    const newVehicle = await Vehicle.create({
        newUuid,
        owner_name,
        plate,
        renavam,
        driver
    });

    newVehicle.save();

    driver.vehicles.push(newVehicle);
    driver.save();
    //return res.status(201).send(`Vechicle created successfully!`);
    return res.status(201).json(newVehicle);
};

exports.put = async (req, res) => {
    const { owner_name, plate, renavam} = req.body;
    Vehicle.findById(req.params.id,function (err,vehicle) {
        if (err) {
            return res.status(500).send('Error: ',err);
        }
        vehicle.owner_name = owner_name;
        vehicle.surname = plate;
        vehicle.renavem = renavam;
        vehicle.active = true;
        vehicle.modification_date = new Date();
        vehicle.save();
        return res.status(201).json(vehicle);
    });
};

exports.delete = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    vehicle.active = false;
    vehicle.modification_date = new Date();
    await vehicle.save();
    res.status(200).send('\nSuccessfully deleted!\n');
};