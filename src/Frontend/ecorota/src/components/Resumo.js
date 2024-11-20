import styled from "styled-components"
import Mais from './Mais'
import { useCookies } from "react-cookie"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useApiUrl } from "../context/ApiContext";

const Container = styled.div`
    position: absolute;
    height: 80vh;
    width: 90vw;
    text-align: center;
    border-radius: 30px;
    background-color: #DBD2BB;
    left: 0;
    top: 15vh;
    bottom: 0;
    right: 0;
    margin-inline: auto; 
    p{
        font-family: dosis;
        font-weight: bold;
        font-size: 2em;
    }
    h1{
        font-family: dosis;
        font-size: 2.5em; 
        margin-bottom: 0;
    }
`
const TextoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    height:60vh;
    
`
const InfoDiv = styled.div`
`
const SalvarButton = styled.button`
    text-decoration: none;
    border: none;
    text-algn: center;
    background-color: #ACAD94;
    font-family: dosis;
    padding: 15px 80px 15px 80px;
    font-size: 2em;
    border-radius: 15px;
    color: #fff6de;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: #58634B;
    }
`
const ButtonDiv = styled.div`
    display:flex;
    justify-content: center;
    margin: 0;
    gap: 5vw;
    :nth-child(2){
        color: #fff6de;
        background-color: #667852;
    }
    :nth-child(2):hover{
        color: #fff6de;
        background-color: #394130;
    }
`
const PlasticoP = styled.p`
   background-color: #542929 !important; 
   color: #fff6de;
        border-radius: 20px;
        padding: 18px 55px 18px 55px;
`
const MetalP = styled.p`
    background-color: #C2A12B !important; 
    color: #fff6de;
        border-radius: 20px;
        padding: 18px 55px 18px 55px;
`
const VidroP = styled.p`
    background-color: #3F4734 !important; 
    color: #fff6de;
        border-radius: 20px;
        padding: 18px 55px 18px 55px;
`
const PapelP = styled.p`
    background-color: #505C69 !important; 
    color: #fff6de;
        border-radius: 20px;
        padding: 18px 55px 18px 55px;
`
const Quantidade = styled.p`
    color: #394130;
    text-align: center;
    margin-bottom: 0;
    margin-top: 20px;
`
const QuantidadeFinal = styled.p`
    color: #394130;
    display: flex;
    justify-content:center;
    margin-top: 10px;
    margin-bottom: 0;
    gap: 5px;
`





const Resumo = ({ handleResumo, handleReset, metal, metalLata, metalCano, metalTampa, metalOutros, metalPregos, vidro, vidroEmbalagem, vidroCopos, vidroRemedio, vidroPotes, vidroOutros,  plastico, plasticoGrande, plasticoPequeno, plasticoTampinha, plasticoCano, plasticoOutros, papel, papelJornal, papelPizza, papelCaderno, papelCartolina, papelOutros  }) => {


    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [sucesso, setSucesso] =  useState(false)

    const notify = () => toast.success('Registro feito com sucesso', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    
    const apiUrl = useApiUrl()
    const handleCommit = async (e) => {

        
        const post = await fetch (`${apiUrl}/materiais/coletas/cadastro/${cookies.Email}`,{
            method:'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({ papel, plastico, metal, vidro })
        })
        const resJson = await post.json()
        console.log(resJson)
        if(resJson.status === 201){
            notify()
        }
        
        
    }

    return(
        <>
            <Container>
                <h1>Resultado da Coleta</h1>
                <div>
                    <TextoDiv>
                        <InfoDiv>
                            <PlasticoP>Plástico</PlasticoP>
                            <Quantidade>{plasticoCano}x Cano PVC = {plasticoCano * 4}</Quantidade>
                            <Quantidade>{plasticoGrande}x Garrafa Grande = {plasticoGrande * 3}</Quantidade>
                            <Quantidade>{plasticoPequeno}x Garrafa Pequena = {plasticoPequeno * 2}</Quantidade>
                            <Quantidade>{plasticoTampinha}x Tampinha = {plasticoTampinha * 2}</Quantidade>
                            <Quantidade>{plasticoOutros}x Outros = {plasticoOutros}</Quantidade>
                            <QuantidadeFinal><Mais/>{plastico}</QuantidadeFinal>
                        </InfoDiv>
                        <InfoDiv>
                            <MetalP>Metal</MetalP>
                            <Quantidade>{metalCano}x Canos de Metal = {metalCano * 4}</Quantidade>
                            <Quantidade>{metalLata}x Enlatados = {metalLata * 3}</Quantidade>
                            <Quantidade>{metalPregos}x Pregos = {metalPregos * 2}</Quantidade>
                            <Quantidade>{metalTampa}x Tampinha = {metalTampa}</Quantidade>
                            <Quantidade>{metalOutros}x Outros = {metalOutros}</Quantidade>
                            <QuantidadeFinal><Mais/>{metal}</QuantidadeFinal>
                        </InfoDiv>
                        <InfoDiv>
                            <PapelP>Papel</PapelP>
                            <Quantidade>{papelCartolina}x Cartolina/Papelao = {papelCartolina * 4}</Quantidade>
                            <Quantidade>{papelPizza}x Caixa Pizza = {papelPizza * 3}</Quantidade>
                            <Quantidade>{papelJornal}x Jornal/Revistas = {papelJornal * 2}</Quantidade>
                            <Quantidade>{papelCaderno}x Folhas Caderno = {papelCaderno}</Quantidade>
                            <Quantidade>{papelOutros}x Outros = {papelOutros}</Quantidade>
                            <QuantidadeFinal><Mais/>{papel}</QuantidadeFinal>
                        </InfoDiv>
                        <InfoDiv>
                            <VidroP>Vidro</VidroP>
                            <Quantidade>{vidroPotes}x Potes = {vidroPotes * 4}</Quantidade>
                            <Quantidade>{vidroEmbalagem}x Embalagens = {vidroEmbalagem * 3}</Quantidade>
                            <Quantidade>{vidroCopos}x Copos = {vidroCopos * 2}</Quantidade>
                            <Quantidade>{vidroRemedio}x Frasco Medicamento = {vidroRemedio * 2}</Quantidade>
                            <Quantidade>{vidroOutros}x Cacos/Outros = {vidroOutros}</Quantidade>
                            <QuantidadeFinal><Mais/>{vidro}</QuantidadeFinal>
                        </InfoDiv>
                    </TextoDiv>
                    <ButtonDiv>
                        <SalvarButton onClick={() => {handleResumo(); handleReset()}}>Voltar</SalvarButton>
                        <SalvarButton onClick={() => {handleCommit(); setTimeout(() => {handleResumo()}, 6000)}}>Confimar</SalvarButton>
                    </ButtonDiv>
                </div>
                        <ToastContainer />
            </Container>
        </>
    )
}

export default Resumo