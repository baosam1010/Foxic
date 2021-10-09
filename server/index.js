
const express = require('express')
const app = express();
var serverPort = 8080;
const port = process.env.post || serverPort;
const favicon = require('../public/favicon.ico');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(favicon(__dirname + '/public/favicon.ico'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})