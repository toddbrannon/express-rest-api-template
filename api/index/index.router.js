const express = require('express')
const router = express.Router()

// ROOT ROUTE
router.get('/', (req, res) => {
    res.send('This is the Root Route of your App!')
})

module.exports = router;