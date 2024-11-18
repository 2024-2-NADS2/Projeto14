import Header from '../components/Header'
import styled from 'styled-components'
import LixeiraAzul from '../components/LixeiraAzul'
import LixeiraVerde from '../components/LixeiraVerde'
import LixeiraAmarela from '../components/LixeiraAmarela'
import LixeiraVermelha from '../components/LixeiraVermelha'



const Main = styled.div`
    background-color: #fff6de;
    width:100%;
    height: 100vh;
    font-family: dosis;
    h2{
        font-weight: 550;
    }
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    

`
const BottomContainer = styled.div`
    display:flex;
    justify-content: space-around;
    margin-top: 8vh;
`
const TextInformation = styled.div`
    text-align: center;
    font-size:1.5em;
    display:flex;
    flex-direction: column;
    align-items:center;
    font-weight: 450;
    svg{
        margin-bottom: 1vh;

    }
    p{
        width: 70%;
        margin-top:1vh;
        margin-bottom:0;
    }
`
const TopContainer = styled.div`
    margin-left: 7.5vw;
    margin-top: 7vh;
`


const Guide = () => {



    
    return(
        <Main>
            <Header/>
            <Container>
                <TopContainer>
                    <h1>Voce sabe como separar os residuos corretamente?</h1>
                    <h2>Confira nosso guia para saber quais materiais reciclar</h2>
                </TopContainer>
                <BottomContainer>
                    <TextInformation>
                        <LixeiraVerde/>
                        <p>Garrafas de vidro (bebidas, molhos)</p>
                        <p>Frascos de conserva</p>
                        <p>Potinhos de vidro (como de geleia)</p>
                        <p>Embalagens de vidro (sem rótulos plásticos)</p>
                    </TextInformation>
                    <TextInformation>
                        <LixeiraVermelha/>
                        <p>Garrafas PET (refrigerantes, água)</p>
                        <p>Embalagens de iogurte e sobremesas</p>
                        <p>Frascos de produtos de limpeza</p>
                        <p>Sacolas plásticas (se forem recicláveis)</p>
                    </TextInformation>
                    <TextInformation>
                        <LixeiraAmarela/>
                        <p>Latas de alumínio (bebidas)</p>
                        <p>Embalagens de metal (como tampas de frascos)</p>
                        <p>Panelas e utensílios de cozinha (sem plástico)</p>
                    </TextInformation>
                    <TextInformation>
                        <LixeiraAzul/>
                        <p>Papelão (caixas de embalagem)</p>
                        <p>Jornais e revistas</p>
                        <p>Papéis de escritório (sem plastificação)</p>
                        <p>Embalagens de papel (como caixas de produtos)</p>
                    </TextInformation>
                </BottomContainer>
            </Container>
        </Main>
    )
}

export default Guide