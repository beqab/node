// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node',
//     password: null
// });

// module.exports = pool.promise();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', null, { dialect: 'mysql', host: 'localhost' })

module.exports = sequelize;