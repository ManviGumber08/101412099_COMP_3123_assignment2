const Employee = require('../models/employeeModel');

// Add employee
exports.addEmployee = async (req, res) => {
  const { name, position, department } = req.body;
  try {
    const newEmployee = new Employee({ name, position, department });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  const { name, position, department } = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, { name, position, department }, { new: true });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted', employee });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search employee by position or department
exports.searchEmployee = async (req, res) => {
  const { department, position } = req.query;
  try {
    const employees = await Employee.find({ department, position });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
