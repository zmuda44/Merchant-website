const router = require('express').Router();
const transcationRoute = require('./transactionRoutes')


router.use('/transaction', transcationRoute)


router.get('/', (req, res) => {
    res.send("this is api route")
})


module.exports = router