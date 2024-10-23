
import NavBar from "./NavBar";
import styled from "styled-components";
import NavBarModal from "./NavBarModal";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    font-size: 7.5vh;
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

export default function Header(){
    const [openModal, setOpenModal] = useState(false)
    function handleOpenModal(){
        setOpenModal(!openModal)
        
    }
    return(
        <>
            <HeaderContainer>
                <Logo className="fa-solid fa-route"></Logo>
                <UserLogin to = "signup" >Login/Cadastre-se</UserLogin>
                <NavBar handleOpenModal={handleOpenModal}/>
            </HeaderContainer>
            {openModal && (<NavBarModal/>
            )}
        </>

    )
}