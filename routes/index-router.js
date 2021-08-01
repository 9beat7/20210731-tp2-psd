const express = require('express')
const router = express.Router()

const harga = require('../models/harga')
const reservasi = require('../models/reservasi')

router.get('/', (req, res) => {
  res.render('index', { harga: harga, reservasi: reservasi })
})

router.get('/reservasi', (req, res) => {
  res.render('reservasi_form', {
    kelas: harga.kelas
  })
})

module.exports = router
