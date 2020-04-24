const Sequelize = require('sequelize')
const teamsModel = require('./teams')

const connection = new Sequelize('nfl', 'football', 'F00tB4LL!', {
  host: 'localhost', dialect: 'mysql'
})

const teams = teamsModel(connection, Sequelize)

module.exports = { teams }

