import { Link, useNavigate, useLocation } from "react-router-dom"
import styled from "styled-components"

const ModalContents = styled(Link)`
    display: flex;
    gap: 1.4vh;
    flex-direction:column;
    padding: 2.2vh;
    background:linear-gradient(180deg,#394130,#071f19);
    color:#fff6de;
    font-family: "Baumans", sistem-ui;
    font-size: 2.5vh;
    text-decoration: none;
    position: absolute;
    z-index:999;
    right: 4.5vw;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    letter-spacing: 0.1vh;
    text-decoration:none;
    *:hover{
        color: #ACAD94;
        text-decoration: underline;
    }
`
const Icons = styled(Link)`
   text-decoration:none; 
   color:#fff6de;
`
export default function NavBarModal(){

    const navigate = useNavigate()
    const location = useLocation()
    return(
        <ModalContents>
            {location.pathname !== "/localizador" && <Icons className="fa-solid fa-map" to = {"/coletas"}> COLETAS </Icons>}
            {location.pathname !== "/guia" && <Icons className="fa-solid fa-recycle" to = {"/guia"} > Guia </Icons>}
            {location.pathname !== "/sobre" && <Icons className="fa-solid fa-circle-info" to = {"/sobre"}> Sobre </Icons>} 
        </ModalContents>
    )
}