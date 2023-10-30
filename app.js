const express = require('express')
const router = require('./src/routes')
const app = express()
const port = 3000
const {connectToDatabase} = require('./src/database/index')

connectToDatabase()

app.use('/',router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})