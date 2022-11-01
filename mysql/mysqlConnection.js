const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0
  });

exports.getConnection = () => {
    return conn;
}