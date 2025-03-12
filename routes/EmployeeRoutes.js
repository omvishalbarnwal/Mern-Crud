const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');


router.post('/add', async (req, res) => {
    try {
        const { srNumber, name, company, salary, department } = req.body;
        const newEmployee = new Employee({ srNumber, name, company, salary, department });
        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully', newEmployee });
    } catch (error) {
        res.status(500).json({ error: 'Error adding employee' });
    }
});


router.get('/all', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching employees' });
    }
});

// ➤ 🟡 **UPDATE Employee (PUT)**
router.put('/update/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
    } catch (error) {
        res.status(500).json({ error: 'Error updating employee' });
    }
});

// ➤ 🔴 **DELETE Employee (DELETE)**
router.delete('/delete/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting employee' });
    }
});

module.exports = router;
