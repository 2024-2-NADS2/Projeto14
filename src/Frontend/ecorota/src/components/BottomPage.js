import { useState } from "react"
import MapaEcoPontos from "./MapaEcoPontos"
import styled from "styled-components"
import BuscaPontos from "./BuscaPontos"

const Main = styled.div`
    display:flex;
    height:100vh;
    width:100%;
    justify-content: center;
    background-color: #acad94;
`
const BuscaContainer = styled.div`  
  height:55vh;
  width:20vw;
  display:flex;
  justify-content: center;
  align-items: start;
  background-color:#071f19;
  border-radius:20px 0px 0px 20px;

`
const BuscaCep = styled.input`
  background-color: #acad94;
    font-size:1.25em;
    margin-top:15px;
    border-radius:10px;
    height:4vh;
    width:12vw;
`

const FormBusca = styled.form`
  display:flex;
  margin-top: 5.5vh;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  flex-wrap:wrap;
  p{
    margin:0;
    padding:0;
    text-align:center;
    color:#fff6de;
    font-family: dosis;
    font-weight: bold;
    font-size:1.5em;
  }
`
const PontosColeta = styled.div`
  background-color:#907359;
    height:55vh;
  width:50vw;
  border-radius: 0px 20px 20px 0px;
  overflow: scroll;
`
const Container = styled.div`
  margin-top:32vh;
  display:flex;
  justify-content: center;
`
const ListaPontos = styled.li`
  color:#fff6de;
  font-family: dosis;
  font-size: 1.25em;
  font-weight: 600;
  margin-left:1vw;
  margin-top:1vh;
`


export default function BottomPage() {


  return (
    <Main>
      <Container>
        <BuscaPontos/>
      {/* <BuscaContainer>
        <FormBusca>
          <BuscaCep
          required
          minLength={0}
          maxLength={8}
          type="number"
          placeholder="DIGITE SEU CEP"
          onChange={(e) => setCepPlaceholder(e.target.value)}
          />
          <BuscaCep
            required
            type="range"
            id="range"
            min="1"
            max="10"
            name="progress"
            value={raioBusca}
            onChange={(e) => setRaioBusca(e.target.value)}
            />
            <p>Raio de busca:<br/> {raioBusca}</p>
          <BuscaCep
           type="submit"
           value="PROCURAR" 
           onClick={(e) => getCep(e)} />
        </FormBusca>
      </BuscaContainer>
      <PontosColeta>
        <MapaEcoPontos ponto={ponto} latMap={latMap} lngMap={lngMap}/>
        {ponto?.map((ponto) => <ListaPontos key={ ponto.eco_id }>{[ ponto.name,<br/>,<br/>,  ponto.address,<br/>,<br/>, ponto.materiais ]}<br/><br/><br/></ListaPontos>)}
      </PontosColeta> */}
      </Container>
    </Main>
  )
}
