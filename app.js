const port = 3000

const path = require('path')
const express = require('express')

const indexRouter = require('./routes/index-router')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada http://localhost:${port}`)
})
