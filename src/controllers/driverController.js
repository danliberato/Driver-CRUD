const { uuid } = require('uuidv4');
var Driver = require('../models/Driver');
const mongoose = require('mongoose');

exports.get = async (req, res) => {
    await Driver.find(function (err,drivers) {
        if (err) {
            return res.status(500).send('Error: ',err);
        }
        return res.json(drivers);
    });
    
     
};

exports.post = async (req, res) => {
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

    return res.status(201).json(newDriver);
};

exports.put = async (req, res) => {
    const { name, surname, cpf, date_of_birth } = req.body;
    Driver.findById(req.params.id,function (err,driver) {
        if (err) {
            return res.status(500).send('Error: ',err);
        }
        driver.name = name;
        driver.surname = surname;
        driver.cpf = cpf;
        driver.date_of_birth = date_of_birth;
        driver.active = true;
        driver.modification_date = new Date();
        driver.save();
        res.status(200).json(driver);
    });
};

exports.delete = async (req, res) => {
    const driver = await Driver.findById(req.params.id);
    driver.active = false;
    driver.modification_date = new Date();
    await driver.save();
    res.status(200).json(driver);
};