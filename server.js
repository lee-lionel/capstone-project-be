const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const userRoute = require('./routes/user.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/users', userRoute)

const PORT = process.env.PORT

app.listen(PORT, function() {
    console.log(`Express app is running on ${PORT}`)
})