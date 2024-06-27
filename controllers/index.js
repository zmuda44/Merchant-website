const router = require('express').Router();
const fs = require('fs')
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.get('/', (req, res) => {
    res.render('homepage')
})



module.exports = router