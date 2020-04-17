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

const saveNewTeam = (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  // console.log(teams.length + 1) // Starting Extra Credit...

  if (!id || !location || !mascot || !abbreviation || !division) {
    return response.status(400)
      .send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = {
    id, location, mascot, abbreviation, conference, division
  }
  // Example Test Data:  { "id": "6000", "location": "Everywhere", "mascot": "A Silly Goat", "abbreviation": "GOAT", "conference": "XYZ", "division": "East" }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
