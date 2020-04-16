const express = require('express')
const { getAllTeams, getTeamsById } = require('./controllers/teams')

const app = express()

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeamsById)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})

