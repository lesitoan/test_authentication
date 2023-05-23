var jwt = require('jsonwebtoken');
const pool = require('../config/connectDB');

const updateUserAvatar = (fileName, token) => {
    return new Promise((resolve, reject) => {
        try {
            // if (!fileName || !token) {
            //     throw new Error('error !!!!!!!!!');
            // }
            const decoded = jwt.verify(token, 'token123456');
            const query = ` UPDATE users
                            SET avatarURL = '${fileName}'
                            WHERE id = ${decoded.id} `;
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
    updateUserAvatar,

}
