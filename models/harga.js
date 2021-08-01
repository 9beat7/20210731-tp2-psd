const harga = {
  kelas: [
    { id: 1, kelas: 'Bujet', harga: 10000 },
    { id: 2, kelas: 'Single', harga: 100000 },
    { id: 3, kelas: 'Vip', harga: 250000 }
  ],
  fasilitas: [
    { id: 1, fasilitas: 'Extra Bed', harga: 50000 },
    { id: 2, fasilitas: 'Room Cleaning', harga: 25000 }
  ]
}

exports.data_harga_kelas_berdasarkan_id = (idTarget) => harga.kelas.find(({ id }) => (id === (idTarget)))

exports.data_harga_fasilitas_berdasarkan_id = (idTarget) => harga.fasilitas.find(({ id }) => (id === idTarget))

exports.data_harga = harga
