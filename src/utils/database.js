//* Import Sequelize module
const Sequelize = require('sequelize')

//* Create the connection to the database

const config = require('../../config')

const db = new Sequelize(config.db.development)

module.exports = db

