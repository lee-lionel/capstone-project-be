const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const userRoute = require('./routes/user.routes')
const postRoute = require('./routes/post.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

// const seeding = require('./models/seedData')
// seeding.seedTutors()

const PORT = process.env.PORT

app.listen(PORT, function() {
    console.log(`Express app is running on ${PORT}`)
})