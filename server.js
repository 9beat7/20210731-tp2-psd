const port = 3000

const path = require('path')
const express = require('express')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', require('./routes/index-router'))

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada http://localhost:${port}`)
})
