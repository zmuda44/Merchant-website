const router = require('express').Router();
const CardHolder = require('../models/CardHolder')
const Transaction = require('../models/Transaction')

router.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = router