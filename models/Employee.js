const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    srNumber: { type: Number, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    salary: { type: Number, required: true },
    department: { type: String, required: true }
});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
