
import NavBar from "./NavBar";
import styled from "styled-components";
import NavBarModal from "./NavBarModal";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const HeaderContainer = styled.header`
    background-color:#394130;
    color: #fff6de;
    display: flex;
    justify-content:space-between;
    align-items: center;
    min-height: 8%.2;
    padding-block:0.8vh;
    padding-inline: 1vw;
`
const Logo = styled.div`
    font-size: 4.5em;
    display:flex;
    margin-left: 1vw;
    cursor:pointer;
    &:hover{
        color:#071f19;
        transition: 0.10s ease;
    }
`
const UserLogin = styled(Link)`
    text-decoration:none;
    font-family:"Dosis";
    font-size:1.3vw;
    font-weight:800;
    margin-top:2.3vh;
    margin-left:auto;
    margin-right:1vw;
    color:#fff6de;
    &:hover{
        color:#acad94;
        transition: 0.10s ease;
    }

`
const UserSignout = styled(Link)`
    text-decoration:none;
    font-family:"Dosis";
    font-size:1.3vw;
    font-weight:800;
    margin-top:2.3vh;
    margin-left:auto;
    margin-right:1vw;
    color:#DC143C;
    &:hover{
        color:#acad94;
        transition: 0.10s ease;
    }
`
const TextLogo = styled.p`
    font-family: Baumans;
    font-size:2.7em;
    margin: 0;
    margin-left:12px;
    align-self:end;
`
const LogoContainer= styled.div`
    display:flex;
    cursor:pointer;
    &:hover{
        color:#071f19;
        transition: 0.10s ease;
    }
`
export default function Header(){
    const [openModal, setOpenModal] = useState(false)
    function handleOpenModal(){
        setOpenModal(!openModal)
        
    }
    const signOut = () => {
        removeCookie('Email')
        removeCookie('AuthToken')
        removeCookie('Name')
        removeCookie('User_Id')
        removeCookie('User_Type')
        
    }
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const authToken = cookies.AuthToken
    const location = useLocation()
    const navigate = useNavigate()



    return(
        <>
            <HeaderContainer>
                <LogoContainer>
                    <Logo onClick={() => navigate('/')} className="fa-solid fa-route"></Logo>               
                    {location.pathname === "/" && <TextLogo onClick={() => navigate('/')} >EcoRota</TextLogo>}
                </LogoContainer>
                
                {!authToken ? <UserLogin to = "/sign" >Login/Cadastre-se</UserLogin> : <UserSignout onClick={() => signOut()}>Desconectar</UserSignout>}
                <NavBar handleOpenModal={handleOpenModal}/>
            </HeaderContainer>
            {openModal && (<NavBarModal/>
            )}
        </>

    )
}