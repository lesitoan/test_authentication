const pool = require('../config/connectDB');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        try {
            pool.query('SELECT * from users', (error, results, fields) => {
                if (error) throw error;
                resolve(results);
            });
        } catch (e) {
            console.log(e);
            reject();
        }
    })
}
const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        try {
            const query = ` SELECT * FROM users WHERE id='${userId}' `;
            pool.query(query, (error, results, fields) => {
                if (error) throw error;
                resolve(results[0]);
            });
        } catch (e) {
            console.log(e);
            reject();
        }
    })
}

const checkLogin = async (data) => {
    const { email, password } = data;
    return new Promise((resolve, reject) => {
        try {
            const query = `SELECT * FROM users WHERE userEmail='${email}' AND userPassword='${password}';`;
            pool.query(query, (error, results, fields) => {
                if (error) throw error;
                resolve(results);
            });
        } catch (e) {
            console.log(e);
            reject();
        }
    })
}

module.exports = {
    getAllUsers,
    checkLogin,
    getUser,
}
