express = require('express')
require('dotenv').config()
PORT = process.env.PORT || 8000
const cors = require('cors')
const app = express()
const pool = require('./db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})