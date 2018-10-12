const express = require('express')
const router = express.Router()
const tournament = require('../controllers/tournament_c')

router.get('/',tournament.get)
router.post('/',tournament.create)

module.exports = router