const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// ROUTES
const indexRouter = require('./api/index/index.router')

app.use(express.urlencoded({ extended: false }))

// USE ROUTES
app.use('/', indexRouter)

// LISTEN FOR REQUESTS
app.listen(port, () => {
    console.log(`The server is running on port ${port}...`)
})