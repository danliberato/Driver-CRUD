const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const Schema = mongoose.Schema;
let VehicleSchema = new Schema({
    _id: {type: String, default: uuid()},
    owner_name: {type: String, required: true, max: 100},
    plate: {type: String, require: true, max: 10},
    renavam: {type: String, require: true, max: 20},
    active: {type: Boolean, require: true, default: true},
    driver:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Driver'
    }
},
 {timestamps: true}
);

module.exports = mongoose.model('Vehicle', VehicleSchema);