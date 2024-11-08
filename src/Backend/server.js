const express = require('express')
require('dotenv').config()
PORT = process.env.PORT || 8000
const cors = require('cors')
const app = express()
const pool = require('./db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())

// dados de reciclagem 




app.get('/profile/:email', async (req, res) => {
    const profile_email = req.params.email
    try{
        const data = await pool.query('SELECT qntplastico, qntvidro, qntpapel, qntmetal FROM userprofile WHERE profile_email = $1', [profile_email])
        res.json({ data:data.rows[0]})
    }catch(err){
        console.error(err)
    }
})
// cadastro

app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body
    const salt =  await bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    try{
        const signup = await pool.query('INSERT INTO users (user_email, user_name, user_password) VALUES($1, $2, $3)',[email, name, hashedPassword])

        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

        const userId = await pool.query('SELECT id, type FROM users WHERE user_email = $1', [email])

        res.json({ email, token, name, 'id': userId.rows[0].id  })
    }catch(err){
        console.error(err)
        if(err) {
            res.json({ detail: err.detail })
        }
    }
})

// login 


app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try{
        const users = await pool.query('SELECT * FROM users WHERE user_email = $1', [email])

        if (!users.rows.length) return res.json({ detail: 'User does not exist'})

        const success = await bcrypt.compare(password, users.rows[0].user_password)
        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

        if(success){
            res.json({ 'email': users.rows[0].user_email, token, 'name': users.rows[0].user_name, 'id': users.rows[0].id, 'type': users.rows[0].type} )
        }
        else{
            res.json({ detail: 'Login failed' })
        }
    }catch(err){
        console.error(err)
    }
})


// utilizando API pra lancar ecopontos no banco de dados

app.post('/cadastro/ecopontos', async (req, res) => {
    const { name, materiais, address, telefone, cep, lon, lat } = req.body
    try{
        const ecoponto = await pool.query(`INSERT INTO ecopontos (name, materiais, address, telefone, cep, geom) VALUES ('${name}', '${materiais}', '${address}', ${telefone}, ${cep}, ST_MakePoint(${lon}, ${lat}))`)


    }catch(err){
        console.error(err)
    }
})

// buscando api CEP ABERTO para pegar longitude e latitude do cep indicado

app.get('/pesquisa/:cep/:raio', async(req, res) => {
    const cep = req.params.cep
    const raio = req.params.raio
    try{
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        
        const apiData = await response.json()
        if(!apiData){
            console.log(`Deu erro no if do APIDATA`)
        }else{
            const lat = apiData.lat
            const lng = apiData.lng
            const getPontos = await pool.query(`SELECT * FROM ecopontos WHERE ST_DWithin(geom::geography, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,  ${raio*1200})`)
            res.json(getPontos.rows)
        }

    }catch(err){
            console.error(err)
        }

})
// const headers = {'Authorization': 'Token token=658ce220adc99310ad8dbdbaccd015a3'}
// const url = 'https://www.cepaberto.com/api/v3/cep?cep=04367060'
// const getApi = async () => {
//     try{
//         const response = await fetch(url,{
//             method:'GET',
//             headers: { 'Authorization': 'Token token=658ce220adc99310ad8dbdbaccd015a3'}
//         })
//         const json = await response.json()
//         console.log(json.latitude)
//         console.log(json.longitude)
//     }catch(err){
//         console.error(err)
//     }
// }
// getApi()



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})