const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// ROUTES
const indexRouter = require('./api/index/index.router')
const homeRouter = require('./api/home/home.router')
const loginRouter = require('./api/login/login.router')

app.use(express.urlencoded({ extended: false }))

// USE ROUTES
app.use('/', indexRouter)
app.use('/home', homeRouter)
app.use('/login', loginRouter)



// LISTEN FOR REQUESTS
app.listen(port, () => {
    console.log(`The server is running on port ${port}...`)
})