express = require('express')
const sequelize = require('./db')
const User = require('./models/User')(sequelize)
require('dotenv').config()
const app = express()

sequelize.sync()
    .then(() => {
        console.log('Database synced')
    })
    .catch(err => console.error('Error syncing database:', err))

app.use(express.json())

//Registrando usuario

app.post('/register', async (req, res) => {
    try{
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        res.status(201).json({ message: "User registered successfully", user})
    }catch(err) {
        console.error('Error registering user:', err)
        res.status(500).json({ message: "Server Error"})
    }
})

app.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const isPasswordMatch =  await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const token = jwt.sign({ userId: user.id }, "your_secret_key_here", {
            expiresIn: "1h"
        })
        res.json({ token })
    }catch(err) {
        console.error('Error logging in:', err)
        res.status(500).json({ message: "Server Error" })
    }
})

function verifyToken(req, res, next) {
    if (!token) {
        return res.status(400).json({ message: "Access Denied" })
    }
    try{
        const decoded = jwt.verify(token.split(" ")[1], "your_secret_key_here")
        req.user = decoded
        next()
    }catch(err) {
        console.error('Error verifying token:', err)
        res.status(500).json({ message: "Server Error" })
    }
}

app.get('/userinfo', verifyToken, async (req, res) => {
    try{
        const user = await User.findByPk(req.user.userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json({ user })
    }catch(err) {
        console.error('Error fetching user info:', err)
        res.status(500).json({ message: "Server Error" })
    }
})

PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

