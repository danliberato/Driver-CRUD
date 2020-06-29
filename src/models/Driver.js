const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let DriverSchema = new Schema({
    _id: {},
    name: {type: String, required: true, max: 100},
    surname: {type: String, required: true, max: 100},
    cpf: {type: String, required: true, max: 11},
    date_of_birth: {type: Date, require: true},
    active: {type: Boolean, require: true, default: true},
    creation_date: {type: Date, require: true, default: new Date()},
    modification_date: {type: Date, require: false, default: new Date()},
    vehicles: [
        {type: mongoose.Schema.Types.ObjectId,red:'Vehicle'}
    ]
},
 {timestamps: true}
);
module.exports = mongoose.model('Driver', DriverSchema);