const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let DriverSchema = new Schema({
    _id: {},
    name: {type: String, required: true, max: 100},
    surname: {type: String, required: true, max: 100},
    cpf: {type: String, required: true, max: 11},
    date_of_birth: {type: Date, require: true},
    active: {type: Boolean, require: true, default: true},
    vehicles: [
        {type: mongoose.Schema.Types.ObjectId,red:'Vehicle'}
    ]
},
 {timestamps: true}
);
module.exports = mongoose.model('Driver', DriverSchema);