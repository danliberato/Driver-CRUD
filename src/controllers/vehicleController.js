const { uuid } = require('uuidv4');
var Vehicle = require('../models/Vehicle');
const mongoose = require('mongoose');

exports.get = async (req, res) => {
    await Vechicle.find(function (err,vechicles) {
        if (err) {
            return res.status(500).send('Error: ',err);
        }
        return res.json(vechicles);
    });
};

exports.post = async (req, res) => {
    const { owner_name, plate, renavam} = req.body;
    const newUuid = uuid();
    const newVechicle = await Vechicle.create({
        newUuid,
        owner_name,
        plate,
        renavam
    });

    newVechicle.save();

    Vechicle.findById(newUuid, function (err) {
        if (err) {
            return res.status(500).send('Error: ',);
        }
    });
    return res.status(201).send(`Vechicle created successfully!`);
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
        res.status(200).send('\nSuccessfully edited!\n');
    });
};

exports.delete = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    vehicle.active = false;
    vehicle.modification_date = new Date();
    await vehicle.save();
    res.status(200).send('\nSuccessfully deleted!\n');
};