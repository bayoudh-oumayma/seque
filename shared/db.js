const Sequelize = require('sequelize');
// const mysql = require('mysql2');

const sequelize = new Sequelize(

    process.env.name,
    process.env.user,
process.env.password,
    {
        dialect: process.env.dialect,
        host: process.env.host,
        port: process.env.db_port,
    }


);

// const conx=connect.connect((err)=>{
//     err?console.log(err):console.log('connected');
// })

module.exports = sequelize;