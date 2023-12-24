const express = require('express');
const UserController = new (require('../../../controllers/userController'))();

const router = express.Router();

router.get('/users', UserController.getUser);
router.post('/users', UserController.createUser);
router.delete('/users', UserController.deleteUser);
// Other user-related routes

module.exports = router;
