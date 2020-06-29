const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController')
router.get('',controller.get);
router.put('/:id',controller.put);
router.post('/', controller.post);
router.delete('/:id', controller.delete);
module.exports = router;