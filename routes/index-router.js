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

router.post('/reservasi', (req, res) => {
  reservasi.push({
    id: 23,
    status: 1,
    nama: req.body.nama,
    paket: req.body.kelas,
    hari: req.body.hari
  })
  res.redirect('/')
})

router.get('/reservasi/:id', (req, res) => {
  res.render('reservasi_detail', {
    data: reservasi.find(({ id }) => parseInt(req.params.id))
  })
})

module.exports = router
