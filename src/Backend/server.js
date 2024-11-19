const express = require('express')
require('dotenv').config()
const cors = require('cors')
const pool = require('./config/db')
const authRoutes = require('./routes/AuthRoutes')
const PORT = process.env.PORT || 8080
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
app.get('/', (req,res) => {
    res.send('Hello World!')
})
//cadastrando coletas do usuario

app.post('/coletas/cadastro/:email', async(req, res) => {
        const profile_email = req.params.email
        const { papel, plastico, metal, vidro } = req.body
        try{
            const data = await pool.query(`INSERT INTO userprofile (profile_email, qntplastico, qntvidro, qntpapel, qntmetal)
                                            VALUES ('${profile_email}', ${Number(plastico)}, ${Number(vidro)}, ${Number(papel)}, ${Number(metal)})
                                            ON CONFLICT (profile_email)
                                            DO UPDATE SET profile_email = excluded.profile_email , qntplastico = userprofile.qntplastico+${Number(plastico)} , qntvidro =  userprofile.qntvidro + ${Number(vidro)}, qntpapel = userprofile.qntpapel + ${Number(papel)}, qntmetal= userprofile.qntmetal + ${Number(metal)};`)
            res.status(201).json({ message: 'Coleta feita com sucesso', status: 201})
        }catch(err){
            console.error(err)
        }
    })


// apagar dados de coleta 

app.post (`/coletas/apagar/:email`, async (req, res) => {

    const profile_email = req.params.email
    try{
        const erase = await pool.query(`DELETE from userprofile WHERE profile_email = '${profile_email}'`)
    }catch(err){
        console.error(err)
    }
})

// cadastro



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
            const getPontos = await pool.query(`SELECT eco_id, name, address, materiais, ST_X (ST_Transform (geom, 4326)) AS lng,
       ST_Y (ST_Transform (geom, 4326)) AS lat FROM ecopontos WHERE ST_DWithin(geom::geography, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,  ${raio*1300})`)
            res.json({ 'data' : getPontos.rows })
            
        }
        
    }catch(err){
            console.error(err)
        }
    })

    
    app.get(`/teste/google`, async(req, res) => {
        try{
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Av+Santa+Catarina+1225,+Vila+Mascote&key=${process.env.GOOGLE_API_KEY}`)
            const googleData = await response.json()
            res.json(googleData.results[0])
        }catch(err){
            console.error(err)
        }
        
    })
    //Route para login e cadastro
    app.use('/auth', authRoutes)
    
    
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})