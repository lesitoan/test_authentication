const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { authStudent, authTeacher, authAdmin } = require('../middleware/authMiddleware');

router.get('/login', userController.getLogin);
router.post('/login', userController.checkLogin);
router.get('/logout', userController.getLogout);

router.get('/student', authStudent, (req, res) => {
    res.send('ok');
});
router.get('/teacher', authTeacher, (req, res) => {
    res.send('ok');
});
router.get('/admin', authAdmin, (req, res) => {
    res.send('ok');
});

router.get('/get-all-users', userController.getAllUsers);

module.exports = router