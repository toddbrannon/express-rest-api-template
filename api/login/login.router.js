const express = require('express')
const router = express.Router()

// LOGIN ROUTE
router.get('/', (req, res) => {
    res.send('This is the Login Route of your App!')
})

module.exports = router;