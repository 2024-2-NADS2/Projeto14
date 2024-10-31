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
    justify-content: center;
    align-items: center;
    background-color:#394130;
    width:45vw;
    height:85vh;
    border-radius: 100% 100% 100% 100%;
    font-family: "Baumans", system-ui;

    p{
        font-family:"Dosis", system-ui;
        font-weight: 600;
        font-size:2.75vh;
        width: 35%;
        text-align: center;
        align-self:center;
        color:#fff6de;
    }
`
const UserEmail = styled.input`
    width:70%;
    font-size:3.5vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
`
const UserPassword = styled.input`
    width:70%;
    margin-top:5%;
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
    overflow: break;
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
const SignUpText = styled.h1`
    color:#acad94;
    margin-left:50%;
    font-size: 7.5vh;
    text-align:center;
    margin:0;
    margin-bottom:4%;
    margin-top: 15%;
    `
const FirstName = styled.input`
    width:70%;
    margin-bottom:5%;
    font-size:3.5vh;
    background-color:#acad94;
    border-radius: 1.5vh 1vh 2vh 1vh;
    font-family: "Baumans", system-ui;
`
const Login = () =>{

    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [error, setError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState(null)

    console.log(cookies)

    const viewLogin = (status) => {
      setError(null)
      setIsLogin(status)
    }

    const handleSubmit = async (e, endpoint) => {
      e.preventDefault()
      if (!isLogin && password !== confirmPassword) {
        setError('Make sure passwords match!')
        console.log('Make sure passwords match!')
        return
      }

      const response = await fetch (`http://localhost:8001/signup`,{
        method:'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({ email, password, name })
      })
      
      const data = await response.json()
      if (data.detail) {
        setError(data.detail)     
      } 
      else{
          setCookie('Email', data.email)
          setCookie('Name', data.name)
          setCookie('AuthToken', data.token)

          window.location.reload()
      }

      
    }

    return(
        <Main>
            <LoginContainer>
                {isLogin ? <Logo to = "/" className="fa-solid fa-route"></Logo> : <SignUpText>CADASTRO</SignUpText> }
                {!isLogin && <FirstName type="name" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>}
                <UserEmail type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <UserPassword type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/> 
                {!isLogin && <UserPassword type="password" placeholder="Confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)}/>}
                {isLogin ? <SignUpButton type="submit" value="LOGIN" onClick={(e) => handleSubmit(e,'login')}/> : <SignUpButton type="submit" value="CADASTRE-SE" onClick={(e) => handleSubmit(e,'signup')}/>}
            </LoginContainer>
            {isLogin ? <p>Ainda não tem uma conta? Cadastre-se <ConfirmationLink to = "/signup">aqui!</ConfirmationLink></p> : <p>Ja esta cadastrado? Clique <ConfirmationLink to = "/login">aqui!</ConfirmationLink></p>}
        </Main>
        )
}

export default Login