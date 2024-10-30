import { Link } from "react-router-dom"
import styled from "styled-components"

const Main = styled.div`
    display:flex;
    justify-content:center;
    align-items:center; 
    background-color:#ACAD94;
    width:100vw;
    height:100vh;
`
const SignUpContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#394130;
    width:45vw;
    height:85vh;
    border-radius: 35% 10% 35% 10%;
    font-family: "Baumans", system-ui;
    p{
        font-family:"Dosis", system-ui;
        font-weight: 600;
        font-size:2.75vh;
        margin-left:10%;
        color:#fff6de;
    }
`
const NameContainer = styled.div`
    display:flex;
    justify-content:center;
    gap:1vw;
    margin:auto;
    margin-inline:50%; 
    font-family: "Baumans", system-ui;
`
const FirstName = styled.input`
    margin:auto;
    font-size:2.8vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
`
const SecondName = styled.input`
    margin:auto;
    font-size:2.8vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;

`
const UserEmail = styled.input`
    margin-top:5%;
    width:70%;
    margin-left:15%;
    font-size:3.5vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
`
const UserPassword = styled.input`
    margin-top:3.5%;
    width:70%;
    margin-left:15%;
    font-size:3.5vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
    `
const SignUpText = styled.h1`
    color:#acad94;
    margin-left:50%;
    font-size: 7.5vh;
    text-align:center;
    margin:0;
    margin-bottom:10%;
    margin-top: 15%;
    `
const SignUpButton = styled.button`
    font-family: "Baumans", system-ui;
    font-size:4.5vh;
    background-color:#907359;
    color:#fff6de;
    width:40%;
    margin:auto;
    margin-top:8%;
    border-radius: 1.5vh 1vh 2vh 1vh;
    border:none;
    text-decoration:none;
    padding:10px;
    cursor: pointer;
    &:hover{
        transition: 0.10s ease-in;
        background-color:#443629;
    }
`
const ConfirmationLink = styled(Link)`
    text-decoration:none;
    color:#907359;
    cursor: pointer;
    &:hover{
        color:#acad95;
    }
`


export default function SignUp(){
    return(
        <Main>
            <SignUpContainer>
                <SignUpText>CADASTRO</SignUpText>
                <NameContainer>
                    <FirstName placeholder="  NOME"/>
                    <SecondName placeholder=" SOBRENOME"/>
                </NameContainer>
                <UserEmail placeholder=" EMAIL" className="text sm"/>
                <UserPassword placeholder=" SENHA"/>
                <SignUpButton>CADASTRE-SE</SignUpButton>
                <p>Ja esta cadastrado? Clique <ConfirmationLink to = "/login">aqui!</ConfirmationLink></p>
            </SignUpContainer>
        </Main>
    )
}