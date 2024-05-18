const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

module.exports = { EmployeeModel };
