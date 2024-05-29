const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')


const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 4001

app.listen(PORT, function() {
    console.log(`Express app is running on ${PORT}`)
})