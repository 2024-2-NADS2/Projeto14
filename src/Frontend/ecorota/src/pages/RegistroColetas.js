import styled from "styled-components"
import Header from "../components/Header"
import Resumo from "../components/Resumo"
import { useEffect, useState } from "react"

const Main = styled.main`
    position: absolute;
    background-color: #fff6de;
    height: 87%;
    width:100vw;
    top:13vh;
    border-radius: 65px 65px 0px 0px;
    font-family: dosis;

    

`
const TextoDiv = styled.div`
    text-align: center;
    font-family: dosis;
    font-size: 1.3em;
    
    h3{
        font-weight: 400;
        margin-bottom: 0;
    }
`
const FormsDiv = styled.div`
    display: flex;
    justify-content: space-around;
`
const FormCadastro = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 width: 16vw;
 padding: 20px;
 height: 30vh;
 font-size: 0.5em !important;
 background-color: #ACAD94;
 border-radius: 0px 0px 25px 25px;

 

`
const Material = styled.input`
    width: 30px;
    height: 30px;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    font-family: dosis;
    border-radius: 5px;
    border: none;
    background-color: #fff6de;
    &::placeholder{
        color: #394130;
        }
    &:focus{
        text-decoration: none;
    }
`
const SpanDiv = styled.div`
    background-color: #9D9580;
    position:absolute;
    height: 20vh;
    width:100vw;
`
const FormContainer = styled.div`
    font-size: 2.82em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    
        p{
        background-color: #394130;
        color: #fff6de;
        border-radius: 25px 25px 0px 0px;
        width: 16vw;
        padding: 20px;
        margin-bottom: 0;
        text-align: center;

    }
`

const InputDiv = styled.div`
    text-align: center;
    display: flex;
    font-size: 1.05em;
    justify-content: space-between;
    color: #394130;
`
const InputTexto = styled.div`
    text-align: center;
    color: #394130;
    width: 100px;
    display:flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
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
const BottomDiv = styled.div`
    margin-top: 5vh;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`
const PlasticoP = styled.p`
   background-color: #542929 !important; 
`
const MetalP = styled.p`
    background-color: #C2A12B !important; 
`
const VidroP = styled.p`
    background-color: #3F4734 !important; 
`
const PapelP = styled.p`
    background-color: #505C69 !important; 
`





const RegistroColetas = () => {

    
    const [metal, setMetal] = useState(0)
    const [metalLata, setMetalLata] = useState(0)
    const [metalCano, setMetalCano] = useState(0)
    const [metalTampa, setMetalTampa] = useState(0)
    const [metalOutros, setMetalOutros] = useState(0)
    const [metalPregos, setMetalPregos] = useState(0)
    
  
    const [vidro, setVidro] = useState(0)
    const [vidroEmbalagem, setVidroEmbalagem] = useState(0)
    const [vidroCopos, setVidroCopos] = useState(0)
    const [vidroRemedio, setVidroRemedio] = useState(0)
    const [vidroPotes, setVidroPotes] = useState(0)
    const [vidroOutros, setVidroOutros] = useState(0)


    const [plastico, setPlastico] = useState(0)
    const [plasticoGrande, setPlasticoGrande] = useState(0)
    const [plasticoPequeno, setPlasticoPequeno] = useState(0)
    const [plasticoTampinha, setPlasticoTampinha] = useState(0)
    const [plasticoCano, setPlasticoCano] = useState(0)
    const [plasticoOutros, setPlasticoOutros] = useState(0)

    const [papel, setPapel] = useState(0)
    const [papelJornal, setPapelJornal] = useState(0)
    const [papelPizza, setPapelPizza] = useState(0)
    const [papelCaderno, setPapelCaderno] = useState(0)
    const [papelCartolina, setPapelCartolina] = useState(0)
    const [papelOutros, setPapelOutros] = useState(0)


    const [shownResumo, setShownResumo] = useState(false)

    const handleResumo = () => { 
        if(shownResumo === true){setShownResumo(false)}
        else{setShownResumo(true)} 
    }
    const handleReset = () => {

        setPapelOutros(0)
        setPapelCartolina(0)
        setPapelCaderno(0)
        setPapelPizza(0)
        setPapelJornal(0)

        setPlasticoOutros(0)
        setPlasticoCano(0)
        setPlasticoTampinha(0)
        setPlasticoPequeno(0)
        setPlasticoGrande(0)

        setVidroOutros(0)
        setVidroPotes(0)
        setVidroRemedio(0)
        setVidroCopos(0)
        setVidroEmbalagem(0)

        setMetalLata(0)
        setMetalCano(0)
        setMetalTampa(0)
        setMetalOutros(0)
        setMetalPregos(0)

    }
    useEffect(() => {
        setPlastico((plasticoCano * 4) + Number(plasticoOutros) + (plasticoPequeno * 2) + (plasticoGrande * 3) + (plasticoTampinha * 2))
        setVidro((vidroPotes * 4) + Number(vidroOutros) + (vidroCopos * 2) + (vidroEmbalagem * 3) + (vidroRemedio * 2))
        setMetal((metalCano * 4) + Number(metalOutros) + Number(metalTampa) + (metalLata * 3) + (metalPregos * 2))
        setPapel((papelJornal * 2) + (papelPizza * 3) + Number(papelCaderno) + (papelCartolina * 4) + Number(papelOutros))
      },);

    console.log(Number(plastico + vidro + papel + metal))




    return(
        
            <>
            <Header/>
            <SpanDiv><br/></SpanDiv>
            {!shownResumo && <Main>
                <TextoDiv>
                    <h1>Registro de Coleta</h1>
                    <h3>Adicione os materiais que você coletou, <br/>depois salve seu registro :)</h3>
                </TextoDiv>
                <FormsDiv>
                    <FormContainer>
                        <PlasticoP>Plastico</PlasticoP>
                        <FormCadastro>
                            <InputDiv>
                                Cano PVC <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPlasticoCano(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Garrafa Grande <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPlasticoGrande(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Garrafa Pequena <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPlasticoPequeno(e.target.value )}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Tampinha <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPlasticoTampinha(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Outros <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPlasticoOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                    <FormContainer>
                        <MetalP>Metal</MetalP>
                        <FormCadastro>
                            <InputDiv>
                                Canos de Metal <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setMetalCano(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Enlatados <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setMetalLata(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Pregos <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setMetalPregos(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Tampinha <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setMetalTampa(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Outros <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setMetalOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                    <FormContainer>
                        <PapelP>Papel</PapelP>
                        <FormCadastro>
                            <InputDiv>
                                Cartolina/Papelao <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPapelCartolina(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Caixa Pizza <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPapelPizza(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Jornal/Revistas <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPapelJornal(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Folhas Caderno <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPapelCaderno(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Outros <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setPapelOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                    <FormContainer>
                        <VidroP>Vidro</VidroP>
                        <FormCadastro>
                            <InputDiv>
                                Potes <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setVidroPotes(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Embalagens <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setVidroEmbalagem(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Copos <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setVidroCopos(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Frasco Medicamento <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setVidroRemedio(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Cacos/Outros <InputTexto>
                                <Material
                                    type="number"
                                    placeholder="0"
                                    onChange={(e) => setVidroOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                </FormsDiv>
                <BottomDiv>
                    <SalvarButton onClick={() => handleResumo()}>Salvar</SalvarButton>
                </BottomDiv>               
            </Main>}
            
                    {shownResumo && 
                          <Resumo metalCano={metalCano} metalLata={metalLata} metalTampa={metalTampa} metalOutros={metalOutros} metalPregos={metalPregos} metal={metal}
                          vidroEmbalagem={vidroEmbalagem} vidroCopos={vidroCopos} vidroRemedio={vidroRemedio} vidroPotes={vidroPotes} vidroOutros={vidroOutros} vidro={vidro}
                          plasticoGrande={plasticoGrande} plasticoPequeno={plasticoPequeno} plasticoTampinha={plasticoTampinha} plasticoCano={plasticoCano} plasticoOutros={plasticoOutros} plastico={plastico}
                          papelJornal={papelJornal} papelPizza={papelPizza} papelCaderno={papelCaderno} papelCartolina={papelCartolina} papelOutros={papelOutros} papel={papel}
                          handleResumo={handleResumo} handleReset={handleReset}
                  >
                        </Resumo>}
        </>

    )
}


export default RegistroColetas