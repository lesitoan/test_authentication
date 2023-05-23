var jwt = require('jsonwebtoken');

const authStudent = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const decoded = jwt.verify(token, 'token123456');
        console.log(decoded)
        if (parseInt(decoded.role) >= 1) {
            next();
        }
    } catch (e) {
        console.log(e)
        res.redirect('/login');
    }
}
const authTeacher = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const decoded = jwt.verify(token, 'token123456');
        console.log(decoded)
        if (parseInt(decoded.role) >= 2) {
            next();
        } else {
            throw 'error';
        }
    } catch (e) {
        console.log(e)
        res.redirect('/login');
    }
}

const authAdmin = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const decoded = jwt.verify(token, 'token123456');
        console.log(decoded)
        if (parseInt(decoded.role) >= 3) {
            next();
        } else {
            throw 'error';
        }
    } catch (e) {
        console.log(e)
        res.redirect('/login');
    }
}

module.exports = {
    authStudent, authTeacher, authAdmin
}
