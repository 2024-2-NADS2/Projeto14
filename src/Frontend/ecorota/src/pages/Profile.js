import styled from "styled-components"
import pfp from "../assets/pfp.png"
import { redirect, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useCookies } from 'react-cookie'
import BarChart from '../components/BarChart'
import Header from "../components/Header"
import { useEffect, useState, useRef } from "react"
import Globe from 'react-globe.gl'
import * as THREE from '//unpkg.com/three/build/three.module.js'
const ProfileContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #394130;
  width:100vw;
  height:100vh;
`
const UserContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index: 2; 
`
const UserPFP = styled.img`
  border-radius:50%;
  width: 10vw;
  height: 20vh;
  background-color:#907359;
  padding: 0.7vw;
`
const UserName = styled.p`
  margin:0;
  font-size: 4vw;
  padding: 0;
  color:#fff6de;
  font-family:"Dosis", system-ui;
  font-weight: 600;
`
const LinkIcons = styled(Link)`
  color:#fff6de;
  text-decoration:none;
  &:hover{
    color:#071f19;
  }
`
const BGElipse = styled.div`
  background-color: #ACAD94;
  color: #ACAD94;
  position: absolute;
  width:95vw;
  border-radius:50% 50% 35% 35%;
  height:100vh;
`
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
  height: 90.88vh;
  h2{
    font-size: 2.3em;
  }
`
const Esq = styled.div`
  width:50%;
    height: 90.88vh;
`
const WelcomeText = styled.div`
  margin:0;
  margin-left:5vw;
  margin-top:5vh;
  font-size: 1.35em;

`
const Container = styled.main`
  background-color: #acad94;
  canvas{
    margin-left:12vw;
    margin-top: 10vh;
    max-width: fit-content;
  }
`


export default function Profile() {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [metal, setMetal] = useState(0)
  const [plastico, setPlastico] = useState(0)
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
        </Esq>
        <Dir>
          <h2>Seu impacto no planeta</h2>
          <World/>
        </Dir>
      </Main>
    </Container>
  )
}
