const router = require('express').Router();
const CardHolder = require('../models/CardHolder')
const Transaction = require('../models/Transaction')

router.get('/', (req, res) => {
    const body = req.body
    console.log(body)
})

module.exports = router