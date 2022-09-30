const Sequelize=require('sequelize')
const db=require('../config/db.js')

const Customer = db.define('customer',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
    name:{
        type:Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.NOW,
      },
})
module.exports = Customer