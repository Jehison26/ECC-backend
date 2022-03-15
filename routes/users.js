const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getById);
router.post('/users/add', usersController.addUser);

module.exports = router;