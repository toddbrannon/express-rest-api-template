const express = require('express')
const router = express.Router()

// HOME ROUTE
router.get('/', (req, res) => {
    res.send('This is the Home Route of your App!')
})

module.exports = router;