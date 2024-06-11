const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Define API routes
router.get('/users', apiController.getUsers);
router.get('/users/:id', apiController.getUserById);
router.post('/users', apiController.createUser);
router.put('/users/:id', apiController.updateUserById);
router.delete('/users/:id', apiController.deleteUserById);

module.exports = router;