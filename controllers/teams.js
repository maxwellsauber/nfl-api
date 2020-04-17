const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params

  const matchingTeams = teams.find((team) => team.id === parseInt(id))

  return matchingTeams
    ? response.send(matchingTeams)
    : response.sendStatus(404)
}

const getNextId = () => {
  const lastId = teams.reduce((acc, team) => {
    return team.id > acc ? team.id : acc
  }, 0)

  return lastId + 1
} // Watch Explainer Video for a review of the reduce() function....

const saveNewTeam = (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !division) {
    return response
      .status(400)
      .send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = {
    id: getNextId(), location, mascot, abbreviation, conference, division
  }
  // Example Test Data:  { "location": "Everywhere", "mascot": "A Silly Goat", "abbreviation": "GOAT", "conference": "XYZ", "division": "East" }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
