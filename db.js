const mysql =require('mysql2');

const pool = mysql.createPool({
    user: '',
    host: 'localhost',
    database: 'leap_wallet',
    password: '',
    port: 3306
});


// mysql.end();
module.exports = pool.promise();