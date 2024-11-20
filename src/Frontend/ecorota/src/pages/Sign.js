import { useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { useApiUrl } from "../context/ApiContext"

const Main = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center; 
    background-color:#ACAD94;
    width:100vw;
    height:100vh;
    p{
        font-family:"Dosis", system-ui;
        font-weight: 600;
        font-size:2.75vh;
        padding:0;
        text-align: center;
        align-self:center;
        color:#fff6de;
        border:none;
    }
`
const LoginContainer = styled.form`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-bottom:0;
    background-color:#394130;
    width:45vw;
    height:85vh;
    border-radius: 100% 100% 100% 100%;
    font-family: "Baumans", system-ui;
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
    margin-bottom:0;
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
    padding:0;
    margin:0;
    &:hover{
        color:#071f19;
    }
`
const Logo = styled(Link)`
    font-size:12vw;
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
    color:#fff6de;
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
    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState("")
    const authToken = cookies.AuthToken
    const [confirmPassword, setConfirmPassword] = useState(null)
    const navigate = useNavigate();


    const apiUrl = useApiUrl()

    const viewLogin = (status) => {
      setError(null)
      setIsLogin(status)
    }

    const handleSubmit = async (e, endpoint) => {
      e.preventDefault()
      if (!isLogin && password !== confirmPassword) {
        setError('Make sure passwords match!')
        return
      }

      const response = await fetch (`${apiUrl}/auth/${endpoint}`,{
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
          setCookie('User_Id', data.id)      
          setCookie('User_Type', data.type) 
          window.location.reload()  
      }
      
    }
    
    useEffect(() => {
        if (authToken){
          navigate('/')
        }
      })

    return(
        
        <Main>
            <LoginContainer>
                {isLogin ? <Logo to = "/" className="fa-solid fa-route"></Logo> : <SignUpText>CADASTRO</SignUpText> }
                {!isLogin && <FirstName type="name" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>}
                <UserEmail type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <UserPassword type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/> 
                {!isLogin && <UserPassword type="password" placeholder="Confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)}/>}
                {isLogin ? <SignUpButton type="submit" value="Login" onClick={(e) => handleSubmit(e,'login')}/> : <SignUpButton type="submit" value="Cadastre-se" onClick={(e) => handleSubmit(e,'signup')}/>}
                {error && <p>{error}</p>}
            </LoginContainer>
            {isLogin ? <p>Ainda não tem uma conta? Cadastre-se <ConfirmationLink onClick={() => viewLogin(false)}>aqui!</ConfirmationLink></p> : <p>Ja esta cadastrado? Clique <ConfirmationLink onClick={() => viewLogin(true)}>aqui!</ConfirmationLink></p>}
        </Main>
        )
}

export default Login