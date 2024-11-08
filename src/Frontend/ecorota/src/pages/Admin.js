import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";

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
    const [telefone, setTelefone] = useState(null)
    const [cep, setCep] = useState(null)
    const [lon, setLon] = useState(null)
    const [lat, setLat] = useState(null)

    const handleCommit = async (e) => {
        e.preventDefault()
        
        const post = await fetch ('http://localhost:8001/cadastro/ecopontos',{
            method:'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ name, materiais, address, telefone, cep, lon, lat })
        })
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
                    <input type="text" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                    <input type="text" placeholder="LON" onChange={(e) => setLon(e.target.value)} />
                    <input type="text" placeholder="LAT" onChange={(e) => setLat(e.target.value)} />
                    <input type="submit" value="cadastrar" onClick={(e) => handleCommit(e)} />

                </form>
            </Main>
        </>
    )
}

export default Admin