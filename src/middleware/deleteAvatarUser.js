const jwt = require('jsonwebtoken');
const { getUser } = require('../service/userService');
const cloudinary = require('../config/cloudinary');
const { updateUserAvatar } = require('../service/ortherService')

const deleteAvatarUser = async (req, res, next) => {
    try {
        // ----- find user in db -----
        const token = req.cookies.token;
        const decoded = jwt.verify(token, 'token123456');
        const userId = decoded.id;
        const user = await getUser(userId);
        console.log('user: ', user);
        const fileName = user.avatarURL;
        console.log('type of fileName: ', typeof fileName === 'object');
        // delete curent avatar
        if (typeof fileName === 'object') {
            return next();
        }
        const status = await cloudinary.uploader.destroy(fileName);
        console.log('response: ', status);

        await updateUserAvatar(null, token);
        return next();

    } catch (e) {
        console.log('delete error: ', e);
        return res.send('loi');
    }
}

module.exports = { deleteAvatarUser };
