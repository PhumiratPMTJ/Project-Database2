const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const session = require('express-session');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ เสิร์ฟไฟล์ static จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ ตรวจสอบการล็อกอินก่อนให้เข้าถึงหน้า index.html
app.get('/', (req, res) => {
    const user = req.session?.user; // ตรวจสอบจาก session หรือจากข้อมูลอื่นที่คุณเก็บ
    if (user) {
        res.sendFile(path.join(__dirname, 'public', 'index.html')); // ผู้ใช้ล็อกอินแล้ว ให้เปิดหน้า index.html
    } else {
        res.redirect('/login.html'); // ถ้ายังไม่ได้ล็อกอิน ให้ไปที่หน้า login.html
    }
});

// ✅ เสิร์ฟหน้า Register และ Login
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// ✅ เส้นทางสำหรับ API
app.use('/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});



app.use(session({
    secret: 'your-secret-key',  // ตั้งค่า secret สำหรับการเข้ารหัส session
    resave: false,
    saveUninitialized: true
}));
