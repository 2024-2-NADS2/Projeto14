import styled from "styled-components"
import EarthLogo from '../components/earthlogo'
import { redirect, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import BarChart from '../components/BarChart'
import Header from "../components/Header"
import { useEffect, useState} from "react"

const Main = styled.div`
  display:flex;
  font-family: 'Dosis';
  h2{
    max-width: fit-content;
    margin-top: 0;
  }
    h1{
    max-width: fit-content;
    margin-bottom: 0;
  }

`
const Dir = styled.div`
  width:50%;
  height: 100%;
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
  margin-top:4vh;
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
`
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;

`
const HText = styled.h2`
  margin-bottom:0;
  margin-top:10vh !important;
`
const Esq = styled.div`
  width:50%;
    height: 100%;
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
  const getMaterials = async () => {

    try{const getData = await fetch (`http://localhost:8001/profile/${cookies.Email}`,{
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
    console.log(vidro, plastico, metal, papel)
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
          <BarChart vidro={vidro} plastico={plastico} metal={metal} papel={papel}/>
          {!vazio ? <BarChart vidro={vidro} plastico={plastico} metal={metal} papel={papel}/> : <VazioTexto>Ainda nao ha dados, vamos reciclar!</VazioTexto>}
        </Esq>
        <Dir>
            <HText>Seu impacto no planeta</HText>
          <DirContainer>
            <EarthLogo/>
            <TextContainer>
            <MediaContainer>
              <h2>75</h2>
              <h3>Media de reciclagem
              <h4>(media da populacao 20)</h4>
              </h3>
            </MediaContainer>
            <MediaContainer>
              <h2>75</h2>
              <h3>Media de reciclagem
              <h4>(media da populacao 20)</h4>
              </h3>
            </MediaContainer>
            <MediaContainer>
              <h2>75</h2>
              <h3>Media de reciclagem
              <h4>(media da populacao 20)</h4>
              </h3>
            </MediaContainer>
            </TextContainer>
          </DirContainer>
        </Dir>
      </Main>
    </Container>
  )
}
