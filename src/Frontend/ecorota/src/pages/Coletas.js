import { Link } from "react-router-dom"
import styled from 'styled-components'
import BuscaPontos from '../components/BuscaPontos'
import Header from '../components/Header'
import { useCookies } from "react-cookie"


const Main = styled.div`
    background-color: #fff6de;
    height:100vh;
`
const ContainerBusca = styled.div`
    display:flex;
    width: 50vw;
    margin:0;
    padding:0;
    border: 8px solid #071F19;
    border-radius:28px;


`
const ContainerMain = styled.div`
    display:flex;
    justify-content: space-around;
    margin:0;

    margin-top: 13vh;
    padding:0;

`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7vh;
    margin-right:5vw;
    button{
        text-decoration: none;
        border:none;
        font-family: dosis;
        font-weight: 600;
        font-size: 2.3em;
        padding: 20px 47px 20px 47px;
        border-radius: 25px;
    }
    :nth-child(1){
        background-color: #58634B;
        color: #fff6de;

    }
        :nth-child(1):hover{
        background-color: #071F19;
    }
    :nth-child(2){
        background-color: #8E9F7B;
        color: #fff6de;
    }
        :nth-child(2):hover{
        background-color: #58634B;
    }

`
const NavButton = styled(Link)`
    text-decoration: none;
    text-align:center;
        border:none;
        font-family: dosis;
        font-weight: 600;
        font-size: 2.3em;
        padding: 20px 47px 20px 47px;
        border-radius: 25px;
`

const Coletas = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null)
    const AuthToken = cookies.AuthToken
    return(
        <Main>
            <Header/>
            <ContainerMain>
                <ContainerBusca>
                    <BuscaPontos/>
                </ContainerBusca>
                <ButtonDiv>
                    {AuthToken ? <NavButton to = {'/coletas/registro'}>REGISTRAR COLETA</NavButton> : <NavButton to = {'/sign'}>Cadastre-se para coletar</NavButton>}
                    <NavButton to = {'/perfil'}>MEU PERFIL</NavButton>
                </ButtonDiv>
            </ContainerMain>
            
        </Main>
    )
}

export default Coletas