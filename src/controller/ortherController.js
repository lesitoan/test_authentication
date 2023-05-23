const ortherService = require('../service/ortherService');

const homePage = (req, res) => {
    res.render('homePage.ejs')
}

const getAvatar = (req, res) => {
    res.render('formPostAvatar.ejs');
}

const postAvatar = async (req, res) => {
    console.log(req.file)
    const fileName = req.file.filename;
    const token = req.cookies.token;
    await ortherService.updateUserAvatar(fileName, token);
    res.redirect('/user-private');
}

const privateUserPage = (req, res) => {
    res.render('formPostAvatar.ejs');
}

module.exports = {
    homePage,
    getAvatar,
    postAvatar,
    privateUserPage,
}
