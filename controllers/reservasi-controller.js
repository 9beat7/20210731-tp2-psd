const harga = require('../models/harga')
const reservasi = require('../models/reservasi')

exports.index = (req, res) => {
  res.render('index', { harga: harga, reservasi: reservasi })
}

exports.reservasi_get = (req, res) => {
  res.render('reservasi_form', {
    kelas: harga.kelas
  })
}

exports.reservasi_post = (req, res) => {
  reservasi.push({
    id: 23,
    status: 1,
    nama: req.body.nama,
    paket: req.body.kelas,
    hari: req.body.hari
  })
  res.redirect('/')
}

exports.reservasi_detail = (req, res) => {
  res.render('reservasi_detail', {
    data: reservasi.find(({ id }) => parseInt(req.params.id))
  })
}
