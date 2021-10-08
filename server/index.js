
const express = require('express')
const app = express()
const port =process.env.post || 5000
const favicon = require('./../public/favicon.ico')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(favicon(__dirname + '/public/favicon.ico'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})