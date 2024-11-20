import styled from "styled-components"
import EarthLogo from '../components/earthlogo'
import { redirect, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import BarChart from '../components/BarChart'
import Header from "../components/Header"
import { useEffect, useState} from "react"
import { useApiUrl } from "../context/ApiContext"

const Main = styled.div`
  display:flex;
  font-family: 'Dosis';

`
const Dir = styled.div`
  width:50%;
  display:flex;
  flex-direction: column;
  justify-content:start;
  align-items:center;
  h2{
    font-size: 3em;
  }

`
const DirContainer = styled.div`
  display:flex;
  align-items:center;
  margin-top:6vh;
`
const MediaContainer = styled.div`
  display:flex;
  align-items:center;
  margin-left: 2vw;
  margin-bottom: 2.5vh;
  h2{
    margin-right:1vw;
  }
  *{
  margin:0;
  padding:0;
  }
  h3{
    font-size:1.7em
  }
`
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;

`
const HText = styled.h2`
  margin-bottom:0;
  margin-top:20vh !important;
`
const Esq = styled.div`
  width:50vw;
  height: fit-content;
  button{
    position: absolute;
    top:85vh;
    right:55vw;
    border:none;
    background-color: #8E9F7B;
    font-family: dosis;
    font-weight: bold;
    color: #542929;
    font-size: 1.3em;
    border-radius: 12px;
    padding: 10px 30px 10px 30px;
    cursor: pointer;
  }
  button:hover{
    background-color: #542929;
    color: #fff6de;
    cursor: pointer;
  }
`
const WelcomeText = styled.div`
  margin:0;
  margin-left:5vw;
  margin-top:5vh;
  font-size: 1.35em;

`
const Container = styled.main`
  background-color: #acad94;
  height: 100vh;
`
const VazioTexto = styled.h1`
  font-size: 3.25em;
  text-align:center;
  margin-left:2vw;
  margin-top:20vh;
`


export default function Profile() {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [metal, setMetal] = useState(0)
  const [plastico, setPlastico] = useState(0)
  const [vazio, setVazio] = useState(false)
  const [vidro, setVidro] = useState(0)
  const [papel, setPapel] = useState(0)
  const authToken = cookies.AuthToken
  const navigate = useNavigate()

  if(!authToken){
    navigate("/")
  }
  const apiUrl = useApiUrl()

  const getMaterials = async () => {

    try{const getData = await fetch (`${apiUrl}/materiais/profile/${cookies.Email}`,{
      method:'GET',
      headers: { 'Content-Type' : 'application/json'},
    })
    const response = await getData.json()
    if(response){
      setMetal(Number(response.data.qntmetal))
      setVidro(Number(response.data.qntvidro))
      setPapel(Number(response.data.qntpapel))
      setPlastico(Number(response.data.qntplastico))
    }
    console.log(response.data)
    
  }catch(err){
    console.error(err)
  }
}
  useEffect(() => {
    getMaterials()
    if(vidro === 0 && papel === 0 && plastico === 0 && metal === 0 ){
      setVazio(true)
    }
    else{
      setVazio(false)
    }
  })

  const handleErase = async () => {

    try{
      const erase = await fetch (`${apiUrl}/materiais/coletas/apagar/${cookies.Email}`,{
        method:'POST',
        headers: { 'Content-Type' : 'application/json'},
      })
      const responseErase = await erase.json()
      if(responseErase){window.location.reload()}
    }catch(err){
      console.error(err)
    }
  }

  
  return (
    <Container>
      <Header/>
      <Main>
        <Esq>
          <WelcomeText>
            <h1>Ola {cookies.Name}</h1>
            <h2>Vamos ver como esta sua <br/> jornada de reciclagem?</h2>
            <h1> Olha so quanto voce ja reciclou</h1>
          </WelcomeText>
          {!vazio ? <BarChart vidro={vidro} plastico={plastico} metal={metal} papel={papel}/> : <VazioTexto>Ainda nao ha dados, vamos reciclar!</VazioTexto>}
          <button onClick={() => handleErase()}>Apagar dados de coleta</button>
        </Esq>
        <Dir>
            <HText>Seu impacto no planeta</HText>
          <DirContainer>
            <EarthLogo/>
            <TextContainer>
            <MediaContainer>
              <h2>70%</h2><br/>
              <h3>Dos brasileiros não reciclam
              </h3>
            </MediaContainer>
            <MediaContainer>
              <h2>77%</h2>
              <h3>Não recicla da forma correta
              </h3>
            </MediaContainer>
            <MediaContainer>
              <h2>04%</h2>
              <h3>São quem fazem parte 
              <h4>de uma onda de mudança e reciclam corretamente</h4>
              </h3>
            </MediaContainer>
            </TextContainer>
          </DirContainer>
        </Dir>
      </Main>
    </Container>
  )
}
