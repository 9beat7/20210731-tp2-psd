const { v4: uuidv4 } = require('uuid')

const reservasi = require('./reservasi')
const harga = require('./harga')

const tagihan = [
]

exports.data_tagihan_berdasarkan_id = (idTarget) => tagihan.find(({ id }) => (id === idTarget))

exports.tambah_tagihan = (idReservasi) => {
  let jumlah = 0

  const dataReservasi = reservasi.data_reservasi_berdasarkan_id(idReservasi)

  jumlah = harga.data_harga_kelas_berdasarkan_id(dataReservasi.paket).harga * dataReservasi.hari

  dataReservasi.fasilitas.forEach(i => {
    jumlah += harga.data_harga_fasilitas_berdasarkan_id(parseInt(i)).harga
  })

  tagihan.push({
    id: uuidv4(),
    id_reservasi: idReservasi,
    jumlah: jumlah
  })
}

exports.data_tagihan = tagihan
