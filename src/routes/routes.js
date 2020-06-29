const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const driverController = require('../controllers/driverController');

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "G2L REST API",
        version: "1.0.0"
    });
});
module.exports = router;

//Vehicle Routes
router.get('/drivers',vehicleController.get);
router.put('/vechicle/:id',vehicleController.put);
router.post('/vehicle', vehicleController.post);
router.delete('/vehicle/:id', vehicleController.delete);

//Driver Routes
router.get('/drivers',driverController.get);
router.put('/driver/:id',driverController.put);
router.post('/driver/', driverController.post);
router.delete('/driver/:id', driverController.delete);