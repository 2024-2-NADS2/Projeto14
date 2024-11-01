import { Link } from "react-router-dom"
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
    right: 4.5vw;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    letter-spacing: 0.1vh;
    *:hover{
        color: #ACAD94;
        text-decoration: underline;
    }
`
export default function NavBarModal(){
    return(
        <ModalContents>
            <i className="fa-solid fa-map"> Localizador </i>
            <i className="fa-solid fa-recycle"> Guia </i>
            <i className="fa-solid fa-circle-info"> Sobre </i> 
        </ModalContents>
    )
}