const express = require('express')
const bodyparser = require('body-parser')
const watchman = require('./watchman')
const saga = require('./saga')

const app = express()
const version = '/v1'
const port = 1337

app.use(bodyparser.json())
app.use(watchman)

app.post(`${version}/checkout`, (req, res) => {
  saga(req.body, () => res.sendStatus(200), () => res.sendStatus(500))
})

app.listen(port, () => {
  console.log(`Server start at :${port}`)
})
