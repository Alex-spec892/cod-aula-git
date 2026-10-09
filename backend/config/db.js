const mysql = require ("mysql2/promise");

const banco = mysql.createPoll({
    host: process.env.DB_HOST,
    user: process.env.DB_USUARIO,
    password: process.env.DB_SENHA,
    database: process.env.DB_BANCO,

    waitForConnections: true,
    connection: 10,
    queueLimit: 0
});

module.exports = banco;