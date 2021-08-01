const { v4: uuidv4 } = require('uuid')

const reservasi = []

reservasi.push({
  id: uuidv4(),
  status: 1,
  nama: 'Budi Prakoso',
  paket: 1,
  hari: 20
})

module.exports = reservasi
