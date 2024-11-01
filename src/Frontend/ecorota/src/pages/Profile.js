import styled from "styled-components"
import pfp from "../assets/pfp.png"
import { redirect, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useCookies } from 'react-cookie'
import Header from "../components/Header"
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
export default function Profile() {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const navigate = useNavigate()

  if(!authToken){
    navigate("/")
  }


  return (
    <>
      <Header/>
      <Main>
        <Esq>
          <WelcomeText>
            <h1>Ola {cookies.Name}</h1>
            <h2>Vamos ver como esta sua <br/> jornada de reciclagem?</h2>
          </WelcomeText>
          <h1> Olha so quanto voce ja reciclou</h1>
        </Esq>
        <Dir>div2</Dir>
      </Main>
    </>
  )
}
