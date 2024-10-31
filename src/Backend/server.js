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

// cadastro

app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body
    const salt =  await bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    try{
        const signup = await pool.query('INSERT INTO users (user_email, user_name, user_password) VALUES($1, $2, $3)',[email, name, hashedPassword])
        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

        res.json({ email, token, name })
    }catch(err){
        console.error(err)
        if(err) {
            res.json({ detail: err.detail})
        }
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})