const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');

const router = express.Router(); // ✅ ใช้ express.Router()

// 📌 สมัครสมาชิก
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error' });
        res.json({ message: '📝 Registered Successfully!' });
    });
});

// 📌 ล็อกอิน
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error' });
        if (results.length === 0) return res.status(401).json({ message: 'User not found' });

        const user = results[0];
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        res.json({ message: '✅ Login Successful', user: { id: user.id, username: user.username, email: user.email } });
    });
});

module.exports = router; // ✅ ต้องส่งออก router เท่านั้น!
