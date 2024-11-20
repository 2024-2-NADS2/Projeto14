import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import { useApiUrl } from "../context/ApiContext";

const Main = styled.div`
    background-color:#fff6de;
    width:100vw;
    height:100vh;

    form{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    input{
        font-size:1.2em;
        margin: 15px;
        width: 30%;
    }
`
// name, materiais, address, telefone, cep, geom

const Admin = () => {

    const [name, setName] = useState(null)
    const [materiais, setMateriais] = useState(null)
    const [address, setAddress] = useState(null)
    const [addressApi, setAddressApi] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [cep, setCep] = useState(null)
    const [lon, setLon] = useState(null)
    const [lat, setLat] = useState(null)
    const [endereco, setEndereco] = useState(null)
    const [lonCep, setLonCep] = useState(null)
    const [latCep, setLatCep] = useState(null)

    const apiUrl = useApiUrl()
    const handleCommit = async (e) => {

        
        const post = await fetch (`${apiUrl}/ecopontos/cadastro/ecopontos`,{
            method:'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ name, materiais, address, telefone, cep, lon, lat })
        })
    }

    const handleGeocode = async (e) => {
        e.preventDefault()

        try{const getGeocode = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressApi}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,{
            method:'GET',
          })
          const data = await getGeocode.json()
          if(data){
            setLatCep(data.results[0].geometry.location.lat)
            setLonCep(data.results[0].geometry.location.lng)
            setEndereco(data.results[0].formatted_address)

          }}catch(err){
            console.error(err)
          }


    }
    return(
        <>
            <Header/>
            <Main>
                <form>
                    <input type="text" placeholder="endereco" onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="materiais" onChange={(e) => setMateriais(e.target.value)} />
                    <input type="number" placeholder="CEP" onChange={(e) => setCep(e.target.value)} />
                    <input type="text" placeholder="Telefone" value='000' onChange={(e) => setTelefone(e.target.value)} />
                    <input type="text" placeholder="LON" onChange={(e) => setLon(e.target.value)} />
                    <input type="text" placeholder="LAT" onChange={(e) => setLat(e.target.value)} />
                    <input type="submit" value="cadastrar" onClick={(e) => handleCommit(e)} />
                </form>
                <input type="text" placeholder="endereco" onChange={(e) => setAddressApi(e.target.value)} />
                <input type="submit" value="busca cep" onClick={(e) => handleGeocode(e)} />
                <p> LON {lonCep}</p>
                <p> LAT {latCep}</p>
                <p> {endereco}</p>
            </Main>
        </>
    )
}

export default Admin