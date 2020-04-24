// const teams = require('../teams') // No Longer needed, all routes now go to MySQL
const models = require('../models')

const getAllTeams = async (request, response) => {
  const teams = await models.teams.findAll()

  return response.send(teams)
}

const getTeamById = async (request, response) => {
  const { id } = request.params

  const matchingTeams = await models.teams.findOne({ where: { id } })

  return matchingTeams
    ? response.send(matchingTeams)
    : response.sendStatus(404)
}

const saveNewTeam = async (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !division) {
    return response
      .status(400)
      .send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = await models.teams.create({
    location, mascot, abbreviation, conference, division
  })

  // Example Test Data:  { "location": "Everywhere", "mascot": "ASillyGoat", "abbreviation": "XYZ", "conference": "AFC", "division": "East" }

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
