import styled from 'styled-components'
import { useState } from 'react'
import MapaEcoPontos from './MapaEcoPontos'
import { useApiUrl } from '../context/ApiContext'



const BuscaContainer = styled.div`  
  height:55vh;
  width:20vw;
  display:flex;
  justify-content: center;
  align-items: start;
  background-color:#071f19;
  border-radius:20px 0px 0px 20px;
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
    font-size:1.7em;
  }
    :nth-child(4):hover{
      background-color:#fff6de;
    }
      :nth-child(1):hover{
      background-color:#fff6de;
    }
      :nth-child(1){
        text-decoration:none;
      }
        :nth-child(2){
        accent-color: #fff6de;
      }
`
const BuscaCep = styled.input`
  background-color: #acad94;
    font-size:1.7em;
    margin-top:15px;
    border-radius:15px;
    height:8.5vh;
    width:12vw;
    text-align: center;
    font-family: dosis;
    font-weight: 600;
    cursor: pointer;  
    
`
const ListaPontos = styled.li`
  color:#fff6de;
  font-family: dosis;
  font-size: 1.25em;
  font-weight: 600;
  margin-left:1vw;
  margin-top:1vh;
`
const PontosColeta = styled.div`
  background-color:#907359;
    height:55vh;
  width:50vw;          /* width of the entire scrollbar */
  overflow: hidden;
  border-radius:0px 20px 20px 0px;

`
const BuscaPontos = () => {


    const [cepPlaceholder, setCepPlaceholder] = useState(null)
    const [latMap, setLatMap] = useState(null)
    const [lngMap, setLngMap] = useState(null)
    const [ponto, setPonto] = useState(null)
    const [raioBusca, setRaioBusca] = useState(1)

    const apiUrl = useApiUrl()
    const getCep = async (e) => {
      e.preventDefault()
      try{
          const getCepData = await fetch (`${apiUrl}/ecoponto/pesquisa/${cepPlaceholder}/${raioBusca}`,{
        method:'GET',
        headers: { 'Content-Type' : 'application/json'},
      })
      const response = await getCepData.json()
      setPonto(response.data)
      console.log(ponto)
    }catch(err){
      console.error(err)
    }
  }

    return(
    <>
        <BuscaContainer>
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
        <MapaEcoPontos ponto={ponto} raioBusca={raioBusca} />
        {/* {ponto?.map((ponto) => <ListaPontos key={ ponto.eco_id }>{[ ponto.name,<br/>,<br/>,  ponto.address,<br/>,<br/>, ponto.materiais,<br/>,<br/>, ponto.lng,<br/>,<br/>, ponto.lat ]}<br/><br/><br/></ListaPontos>)} */}
      </PontosColeta>
    </>
    )
}


export default BuscaPontos