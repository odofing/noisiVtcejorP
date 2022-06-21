const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const connectDB = require('./config')

connectDB()
app.use(express.json())
app.use(cors())

// posts route
const postsRoute = require('./routes/index')
app.use('/api/posts', postsRoute)

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`server running on PORT ${PORT}`))
