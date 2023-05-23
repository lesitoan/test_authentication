const express = require('express');
const router = express.Router();
const uploadCloud = require('../middleware/postAvatar');
const ortherController = require('../controller/ortherController');
const { authStudent } = require('../middleware/authMiddleware');
const { deleteAvatarUser } = require('../middleware/deleteAvatarUser');

router.get('/', ortherController.homePage);
router.get('/user-private', authStudent, ortherController.privateUserPage);
router.post('/user-private', deleteAvatarUser, uploadCloud.single('avatar'), ortherController.postAvatar);


module.exports = router