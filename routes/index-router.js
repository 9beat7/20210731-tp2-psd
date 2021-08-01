const express = require('express')
const router = express.Router()

const reservasiController = require('../controllers/reservasi-controller')

router.get('/', reservasiController.index)
router.get('/reservasi', reservasiController.reservasi_get)
router.post('/reservasi', reservasiController.reservasi_post)
router.get('/reservasi/:id', reservasiController.reservasi_detail)

module.exports = router
