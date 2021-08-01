const harga = require('../models/harga')
const reservasi = require('../models/reservasi')
const tagihan = require('../models/tagihan')

exports.index = (req, res) => {
  res.render('index', {
    harga: harga.data_harga,
    reservasi: reservasi.data_reservasi,
    tagihan: tagihan.data_tagihan
  })
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

exports.reservasi_keluar = (req, res) => {
  const data = reservasi.data_reservasi_berdasarkan_id(req.params.id)
  if (req.body.fasilitas) data.fasilitas.push(...req.body.fasilitas)
  tagihan.tambah_tagihan(req.params.id)
  data.status = 2
  res.redirect('/')
}
