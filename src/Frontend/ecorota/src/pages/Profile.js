import styled from "styled-components"
import pfp from "../assets/pfp.png"
import { Link } from "react-router-dom"
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

export default function Profile() {
  return (
    <>
      <Header/> 
      <ProfileContainer>
        <BGElipse></BGElipse>
        <UserContainer>
          <UserPFP src={pfp}/>
          <UserName>SBrosselin</UserName>
          <LinkIcons to = "https://github.com/sfbrosselin" className="fab fa-github social-icons"></LinkIcons>
          <LinkIcons to = "https://www.linkedin.com/in/brosselindev/" className="fab fa-linkedin social-icons"></LinkIcons>
          <LinkIcons to = "https://www.instagram.com/brosselinj/" className="fab fa-instagram social-icons"></LinkIcons>
        </UserContainer>
        <div className="ProfileInfo">
          <p className="FirstName" >João Pedro</p>
          <p className="SurName">Brosselin</p>
          <p className="EmailPlaceholder">EMAIL:<p className="UserEmail">brosselindev@gmail.com</p></p>
          <p className="PhonePlaceholder">TELEFONE<p className="UserPhone">(11) 95988-4252</p></p>
        </div>
      </ProfileContainer>
    </>
  )
}
