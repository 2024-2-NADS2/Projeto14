import styled from "styled-components"
const Main = styled.main`
    display:flex;
    flex-wrap: wrap;
    height:91vh;
    background-color:#fff6de;
    font-family: "Baumans";
    color:#071f19;
`
const TopText = styled.p`
    position:absolute;
    left:8vw;
    text-shadow:1px 1px 1px rgb(46 91 173 / 0.6);
    text-align:center;
    font-size:2.2vw;
    max-width:55vw;
    margin-top:4vh;
    `
const BottomText = styled.p`
    display:flex;
    position:absolute;
    right:5vw;
    top:53vh;
    gap:0.5vw;
    text-shadow:1px 1px 1px rgb(46 91 173 / 0.6);
    font-size:2.2vw;
    text-align:center;
    i{
        font-size:2.5vw;
    }
    `
const Steps = styled.svg`
    position:absolute;
    top:33vh;
    left:33.5vw;
    width:41%;
    height:25%;
    `
const BottomSteps = styled.svg` 
    position:absolute;
    bottom:0vh;
    right:21.5vw;
    width:36%;
    height:39%;
`
export default function TopPage() {
  return (
    <Main>
        <TopText>A POLUIÇÃO NO PLANETA AUMENTA A CADA DIA E VOCÊ PODE AJUDAR A TORNAR O MUNDO UM LUGAR MAIS LIMPO E SUSTENTÁVEL</TopText>
        <Steps width="500" height="200" viewBox="0 0 780 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8547 5.3399C8.30604 47.9233 -10.3122 94.2298 36.9391 119.375C82.6284 143.689 143.534 146.191 194.047 141.654C222.124 139.133 250.155 128.09 276.067 117.725C311.373 103.602 341.703 82.1102 374.259 62.9352C427.049 31.8429 487.293 9.73412 549.603 14.169C602.541 17.9368 661.144 44.4645 692.684 88.0196C712.965 116.028 731.725 146.236 748.794 176.31C757.843 192.255 764.569 209.343 773.795 250" stroke="#443629" strokeWidth="12" strokeLinecap="round" strokeDasharray="16 25"
        />
        </Steps>
        <BottomText><i className="fa-solid fa-compass"/>E NÓS TE MOSTRAMOS O CAMINHO</BottomText>

        <BottomSteps width="500" height="220" viewBox="0 35 690 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M620.617 5.22211C623.466 23.7415 632.266 40.999 634.354 60.0028C635.891 73.9871 636.046 87.6208 633.252 101.47C628.447 125.283 616.894 139.618 598.145 154.979C523.203 216.377 419.551 221.971 326.785 221.971C286.849 221.971 247.154 221.952 207.302 225.108C185.593 226.828 163.392 228.534 142.345 234.521C124.002 239.739 109.13 250.515 93.8398 261.487C71.5025 277.516 43.8206 291.766 27.8654 314.742C17.7647 329.287 9.76979 348.286 5.47827 365.452" stroke="#443629" strokeWidth="12" strokeLinecap="round" strokeDasharray="16 25"/>
        </BottomSteps>
    </Main> 
  )
}
