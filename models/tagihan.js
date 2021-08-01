const { v4: uuidv4 } = require('uuid')

const tagihan = [
  { id: '1', id_reservasi: '', jumlah: 123999 }
]

exports.data_tagihan_berdasarkan_id = (idTarget) => tagihan.find(({ id }) => (id === idTarget))

exports.tambah_tagihan = (idReservasi, jumlah) => {
  tagihan.push({
    id: uuidv4(),
    id_reservasi: idReservasi,
    jumlah: jumlah
  })
}

exports.data_tagihan = tagihan
