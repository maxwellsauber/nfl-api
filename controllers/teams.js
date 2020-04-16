const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamsById = (request, response) => {
  const { id } = request.params
  const locateTeam = teams.filter(team => team.id === Number(id))

  return response.send(locateTeam)
}

module.exports = { getAllTeams, getTeamsById }
