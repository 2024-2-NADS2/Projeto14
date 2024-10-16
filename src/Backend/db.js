const { Sequelize } = require=('sequelize')

const sequelize = new Sequelize('restapi', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = sequelize