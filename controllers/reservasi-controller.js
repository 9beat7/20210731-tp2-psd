const harga = require('../models/harga')
const reservasi = require('../models/reservasi')

exports.index = (req, res) => {
  res.render('index', { harga: harga.data_harga, reservasi: reservasi.data_reservasi })
}

exports.reservasi_get = (req, res) => {
  res.render('reservasi_form', {
    kelas: harga.data_harga.kelas
  })
}

exports.reservasi_post = (req, res) => {
  reservasi.tambah_reservasi(1, req.body.nama, req.body.kelas, req.body.hari)
  res.redirect('/')
}

exports.reservasi_detail = (req, res) => {
  const data = reservasi.data_reservasi_berdasarkan_id(req.params.id)
  res.render('reservasi_detail', {
    data: data,
    harga: harga.data_harga
  })
}
