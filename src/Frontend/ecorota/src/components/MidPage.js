
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.div`
    background-color:#394130;
    height:100vh;
    display:flex;
    flex-wrap:wrap;
`
const TextContainer = styled.div`
  font-family: "Dosis";
  font-weight:600;
  color:#acad94;
  font-size:2.59vw;
  width:100vw;
  p{
    text-align:center;
    max-width:26.2vw;
    padding-top:7vh;
  }
  display:flex;
  justify-content:center;
  gap:2vw;
  align-items:center;
  

`

const LocationIcon = styled(Link)`
  color:#fff6de;
  font-size:7.5vw;
  position:absolute;
  text-decoration:none;
  left:19vw;
  top:128vh;
  cursor: pointer;
  &:hover{
    color: #071f19;
    transition: 0.15s ease-in;
  }
`
const RecycleIcon = styled(Link)`
  color:#fff6de;
  font-size:7.5vw;
  position:absolute;
  left:45.5vw;
  top:170vh;
  text-decoration:none;
  cursor: pointer;
  &:hover{
    color: #071f19;
    transition: 0.15s ease-in;
  }
`
const StepsIcon = styled.i`
  color:#fff6de;
  font-size:6.5vw;
  position:absolute;
  left:74vw;
  top:124vh;
  transform: rotate(90deg);
`
const ConnectionSteps = styled.svg`
  position:absolute;
  left:21.65vw;
  width:21%;
  height:auto;
  
`
const BotLeftSteps = styled.svg`
  position:absolute;
  left:20vw;
  width:25%;
  top:165vh;
  height:33%;
`
const MidTopSteps = styled.svg`
  position:absolute;
  left:49vw;
  width:30%;
  top:111vh;
  height:auto;
`
const BottomConnectionSteps = styled.svg`
  position:absolute;
  right:19.5vw;
  width:calc(auto + 5vw);
  transform:rotate(-12deg);
  top:168vh;
  height:32%;
`
const LinkLocalizador = styled(Link)`
  text-decoration:underline;
  color:#907359;
  &:hover{
    color:#443629;
    transition: 0.10s ease;
  }
`
const LinkGuia = styled(Link)`
  text-decoration:underline;
  color:#907359;
  &:hover{
    color:#443629;
    transition: 0.10s ease;
  }  
`

export default function MidPage() {
  return (
    <Main>
      <LocationIcon className="fa-solid fa-location-dot" to = {"/coletas"}/>
      <RecycleIcon className="fa-solid fa-recycle" to = {"/guia"}/>
      <ConnectionSteps width="379" height="246" viewBox="0 0 379 246" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M372.899 5.82159C374.88 47.4142 366.832 90.1832 338.131 122.506C306.347 158.301 255.388 165.218 210.253 167.62C137.806 171.476 40.7664 162.283 5.03717 240.887" stroke="#FFF6DE" strokeWidth="10" strokeLinecap="round" strokeDasharray="16 25"/>
      </ConnectionSteps>
      <BotLeftSteps width="508" height="400" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.35085 5.90564C5.35085 77.2028 4.72171 150.946 21.1236 220.704C31.449 264.618 49.4155 306.964 82.8579 338.321C122.634 375.617 175.645 394.719 229.901 394.798C268.604 394.854 316.645 386.579 345.229 357.995C369.888 333.336 374.109 295.297 381.184 263.019C387.891 232.42 398.442 200.554 423.075 179.406C445.442 160.204 500 158.519 700 155.493" stroke="#FFF6DE" strokeWidth="10" strokeLinecap="round" strokeDasharray="16 25"/>
      </BotLeftSteps>
      <MidTopSteps width="624" height="285" viewBox="0 0 624 285" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.07184 279.785C6.15288 266.813 11.0439 253.739 14.8664 241.44C24.2122 211.371 35.3337 181.472 49.4601 153.289C70.9048 110.506 100.724 70.3996 135.84 37.8377C154.387 20.6397 174.562 10.1972 199.505 6.36996C217.864 3.55295 237.94 4.40155 255.355 11.2673C272.463 18.0119 281.345 32.5665 289.324 48.2575C307.885 84.7615 319.462 127.033 366.013 135.992C404.844 143.465 441.847 126.719 473.962 106.817C502.955 88.8495 540.267 55.5813 576.701 56.5933C612.895 57.5987 618.38 112.364 618.38 139.118" stroke="#FFF6DE" strokeWidth="10" strokeLinecap="round"     strokeDasharray="16 25"/>
      </MidTopSteps>
      <StepsIcon className="fa-solid fa-shoe-prints"/>
      <BottomConnectionSteps width="81" height="408" viewBox="0 0 81 408" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M67.0842 5.01611C71.5107 40.9205 77.0463 75.8477 75.4395 112.161C72.9821 167.698 53.8356 215.71 27.642 264.277C11.7425 293.758 6.15867 322.89 5.27922 356.309C4.61554 381.529 12.7596 390.821 29.4851 407.547" stroke="#FFF6DE" strokeWidth="10" strokeLinecap="round" strokeDasharray="16 25"/>
      </BottomConnectionSteps>
      <TextContainer>
        <p>Nosso <LinkLocalizador to = {"/coletas"}>localizador</LinkLocalizador> te ajuda a encontrar o ponto de coleta mais próximo</p>
        <p>Separe seu lixo corretamente e caso precise de ajuda acesse nosso  <LinkGuia to="/guia">guia de reciclagem</LinkGuia></p>
        <p>Agora é só levar o seu lixo no ponto de coleta escolhido, e caminhe para um mundo melhor</p>
      </TextContainer>   
    </Main>
  )
}
