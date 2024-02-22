const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/', (req, res) => {
    res.send('Root');
});

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

module.exports = router;