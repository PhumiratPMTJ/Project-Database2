# GP Sport - ร้านขายอุปกรณ์กีฬาออนไลน์ 🏆

## 📌 แนะนำโครงการ
GP Sport เป็นร้านค้าออนไลน์ที่จำหน่ายอุปกรณ์กีฬาหลากหลายประเภท
ผู้ใช้สามารถเลือกดูสินค้า ลงทะเบียนบัญชี เพิ่มสินค้าในตะกร้า และดำเนินการสั่งซื้อได้


# คำแนะนำการติดตั้งและใช้งานระบบ

## A การเตรียมฐานข้อมูลก่อนการสร้างโครงการ
ก่อนเริ่มต้นการพัฒนาและใช้งานระบบ จำเป็นต้องมีการเตรียมฐานข้อมูล โดยดำเนินการตามขั้นตอนต่อไปนี้:
-
- สร้างฐานข้อมูลใหม่ชื่อ **localhost** ในระบบจัดการฐานข้อมูล MySQL
- นำเข้าไฟล์ **localhost** ลงในฐานข้อมูลที่สร้างขึ้นเพื่อเตรียมโครงสร้างและข้อมูลที่จำเป็น
-ระบุว่าจะสร้างเก็บฐานข้อมูลอะไรบ้าง
-id (primarykey)
-username
-email
-password

## B. การตั้งค่าการเชื่อมต่อฐานข้อมูล
สร้าง iot ขึ้นมาชื่อ localhost ใน HedieSQL
user = root
password = 

CREATE DATABASE userdb;
USE userdb;
**Code**
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

สร้างเสร็จจะมีฐานข้อมูล

โดยการเชื่อม port ให้ตรงกับชื่อฐานข้อมูลใน Mysql 

**db.js**
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database Connected!');
});

module.exports = db;

## C. ติดตั้ง Package ต่างๆ /runข้อมูล
- ติดตั้งแพ็กเกจที่จำเป็น:npm init -y / npm install / npm install mysql2 / npm install dotenv / npm install express 
-node version.js

**สมาชิคโปรเจค**
1.นายภูมิรัตน์ ตั้งใจ  66021960
2.นายธีรภัทร ช้างโต 66021667
**-------------**

