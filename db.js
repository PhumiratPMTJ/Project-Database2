const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Database Connected!');
});

module.exports = db;
