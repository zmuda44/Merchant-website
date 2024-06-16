const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')
})

router.post('/api/transactions', (req, res) => {
    
})

module.exports = router