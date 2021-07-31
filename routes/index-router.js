const express = require('express')
const router = express.Router()

const harga = require('../models/harga')

router.get('/', (req, res) => {
  res.render('index', { harga: harga })
})

module.exports = router
