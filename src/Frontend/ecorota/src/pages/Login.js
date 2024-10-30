import { useState } from "react"
import { useCookies } from 'react-cookie'
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
const LoginContainer = styled.form`
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
const UserEmail = styled.input`
    width:70%;
    margin-top:5%;
    margin-left:15%;
    font-size:3.5vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
`
const UserPassword = styled.input`
    margin-top:6%;
    width:70%;
    margin-left:15%;
    font-size:3.5vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
    `
const SignUpButton = styled.input`
    font-family: "Baumans", system-ui;
    font-size:4.5vh;
    background-color:#907359;
    color:#fff6de;
    width:35%;
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
const Logo = styled(Link)`
    font-size:8vw;
    margin-top:7vh;
    margin-bottom:8vh;
    align-self:center;
    color:#fff6de;
    text-decoration:none;
    &:hover{
        color:#acad94;
        transition:0.10s ease-out;
    }

`


const Login = () =>{

    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState("")

    console.log(cookies)

    const handleSubmit = async (e, endpoint) =>{
        e.preventDefault()
        
    }

    return(
        <Main>
            <LoginContainer>
                <Logo to = "/" className="fa-solid fa-route"></Logo>
                <UserEmail type="email" placeholder="EMAIL"/>
                <UserPassword type="password" placeholder="SENHA"/>
                <SignUpButton type="submit" value="LOGIN"/>
                <p>Ainda não tem uma conta? Cadastre-se <ConfirmationLink to = "/login">aqui!</ConfirmationLink></p>
            </LoginContainer>
        </Main>
        )
}

export default Login