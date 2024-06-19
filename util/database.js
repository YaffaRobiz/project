const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'memore_user',
    database: 'memore',
    password: 'Aa123456'
});
module.exports = pool.promise();