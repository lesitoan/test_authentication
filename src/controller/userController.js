var jwt = require('jsonwebtoken');
const userService = require('../service/userService');

const getAllUsers = async (req, res) => {
    const data = await userService.getAllUsers();
    console.log(data)
    req.status(200).json(data)
}

const getLogin = async (req, res) => {
    res.render('userLogin.ejs');
}

const getLogout = (req, res) => {
    console.log(req.cookies)
    if (req.cookies.token) {
        res.clearCookie("token");
        return res.send('Logout successfully !!!');
    }
    return res.redirect('/login');
}

const checkLogin = async (req, res) => {
    const [user] = await userService.checkLogin(req.body);
    if (user) {
        const token = jwt.sign({ role: user.role, id: user.id }, 'token123456');
        res.cookie('token', token);
    }
    res.redirect('/');
}



module.exports = {
    getLogin,
    checkLogin,
    getAllUsers,
    getLogout,
}
