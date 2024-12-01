const express = require('express');
const router = express.Router();
const { addEmployee, getEmployees, updateEmployee, deleteEmployee, searchEmployee } = require('../controllers/employeeController');

// Employee Endpoints
router.post('/', addEmployee);
router.get('/', getEmployees);
router.get('/:id', getEmployees);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/search', searchEmployee);

module.exports = router;
