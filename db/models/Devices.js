const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    "Device_ID": {
        type: String,
        required: true,
        unique: true
    },
    "Device_Name": {
        type: String,
        required: true
    },
    "Emp_ID": String,
    "Type": {
        type: String,
        require: true
    },
    "Serial_Number": {
        type: String,
        required: true,
        unique: true
    },
    "RAM": Number,
    "Processor": Number,
    "Brand_Name": String,
    "Strage": Number,
    "Color": String,
    "Charger": Boolean,
    "Charger_Brand": String,
    "Charger_Serial_Number": String,
    "Mouse": Boolean,
    "Mouse_Brand": String,
    "Mouse_Serial_Number": String,
    "Status": String
});

module.exports = mongoose.model("devices", deviceSchema);