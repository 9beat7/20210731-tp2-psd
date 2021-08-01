const { v4: uuidv4 } = require('uuid')

const reservasi = []

exports.data_reservasi = reservasi

exports.data_reservasi_berdasarkan_id = (idTarget) => reservasi.find(({ id }) => (id === idTarget))

exports.tambah_reservasi = (status, nama, paket, hari) => {
  reservasi.push({
    id: uuidv4(),
    status: status,
    nama: nama,
    paket: paket,
    hari: hari
  })
}

// Penambahan data awal
reservasi.push({
  id: '1',
  status: 1,
  nama: 'Uji Coba',
  paket: 2,
  hari: 5,
  tambahan: [1, 2]
})
this.tambah_reservasi(1, 'Budi Prakaso', 1, 20)
this.tambah_reservasi(1, 'FRANEKNSITEN', 2, 208)
this.tambah_reservasi(1, 'Banana', 3, 123)
