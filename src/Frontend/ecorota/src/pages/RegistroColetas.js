import styled from "styled-components"
import Header from "../components/Header"
import { useEffect, useState } from "react"

const Main = styled.main`
    position: absolute;
    background-color: #fff6de;
    width:100vw;
    top:18vh;
    border-radius: 65px 65px 0px 0px;
    font-family: dosis;

    

`
const TextoDiv = styled.div`
    text-align: center;
    font-family: dosis;
    font-size: 1.3em;
    
    h3{
        font-weight: 400;
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
    &:focus{
        text-decoration: none;
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
    i{
        cursor:pointer;
    }
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

    useEffect(() => {
        setPlastico((plasticoCano * 4) + Number(plasticoOutros) + (plasticoPequeno * 2) + (plasticoGrande * 3) + (plasticoTampinha * 2))
        setVidro((vidroPotes * 4) + Number(vidroOutros) + (vidroCopos * 2) + (vidroEmbalagem * 3) + (vidroRemedio * 2))
        setMetal((metalCano * 4) + Number(metalOutros) + Number(metalTampa) + (metalLata * 3) + (metalPregos * 2))
        setPapel((papelJornal * 2) + (papelPizza * 3) + Number(papelCaderno) + (papelCartolina * 4) + Number(papelOutros))
      },);

    console.log(Number(plastico + vidro + papel + metal))
    // console.log(vidro)
    // console.log(metal)
    // console.log(papel)

    return(
        <>
            <Header/>
            <SpanDiv><br/></SpanDiv>
            <Main>
                <TextoDiv>
                    <h1>Registro de Coleta</h1>
                    <h3>Adicione os materiais que você coletou, <br/>depois salve seu registro :)</h3>
                </TextoDiv>
                <FormsDiv>
                    <FormContainer>
                        <p>Plastico</p>
                        <FormCadastro>
                            <InputDiv>
                                Cano PVC <InputTexto>
                                <i className="fa-solid fa-plus"/>4<Material
                                    type="number"
                                    onChange={(e) => setPlasticoCano(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Garrafa Grande <InputTexto>
                                <i className="fa-solid fa-plus"/>3<Material
                                    type="number"
                                    onChange={(e) => setPlasticoGrande(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Garrafa Pequena <InputTexto>
                                <i className="fa-solid fa-plus"/>2<Material
                                    type="number"
                                    onChange={(e) => setPlasticoPequeno(e.target.value )}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Tampinha <InputTexto>
                                <i className="fa-solid fa-plus"/>2<Material
                                    type="number"
                                    onChange={(e) => setPlasticoTampinha(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Outros <InputTexto>
                                <i className="fa-solid fa-plus"/>1<Material
                                    type="number"
                                    onChange={(e) => setPlasticoOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                    <FormContainer>
                        <p>Metal</p>
                        <FormCadastro>
                            <InputDiv>
                                Canos de Metal <InputTexto>
                                <i className="fa-solid fa-plus"/>4<Material
                                    type="number"
                                    onChange={(e) => setMetalCano(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Enlatados <InputTexto>
                                <i className="fa-solid fa-plus"/>3<Material
                                    type="number"
                                    onChange={(e) => setMetalLata(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Pregos <InputTexto>
                                <i className="fa-solid fa-plus"/>2<Material
                                    type="number"
                                    onChange={(e) => setMetalPregos(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Tampinha <InputTexto>
                                <i className="fa-solid fa-plus"/>1<Material
                                    type="number"
                                    onChange={(e) => setMetalTampa(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Outros <InputTexto>
                                <i className="fa-solid fa-plus"/>1<Material
                                    type="number"
                                    onChange={(e) => setMetalOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                    <FormContainer>
                        <p>Papel</p>
                        <FormCadastro>
                            <InputDiv>
                                Cartolina/Papelao <InputTexto>
                                <i className="fa-solid fa-plus"/>4<Material
                                    type="number"
                                    onChange={(e) => setPapelCartolina(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Caixa Pizza <InputTexto>
                                <i className="fa-solid fa-plus"/>3<Material
                                    type="number"
                                    onChange={(e) => setPapelPizza(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Jornal/Revistas <InputTexto>
                                <i className="fa-solid fa-plus"/>2<Material
                                    type="number"
                                    onChange={(e) => setPapelJornal(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Folhas Caderno <InputTexto>
                                <i className="fa-solid fa-plus"/>1<Material
                                    type="number"
                                    onChange={(e) => setPapelCaderno(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Outros <InputTexto>
                                <i className="fa-solid fa-plus"/>1<Material
                                    type="number"
                                    onChange={(e) => setPapelOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                    <FormContainer>
                        <p>Vidro</p>
                        <FormCadastro>
                            <InputDiv>
                                Potes <InputTexto>
                                <i className="fa-solid fa-plus"/>4<Material
                                    type="number"
                                    onChange={(e) => setVidroPotes(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Embalagens <InputTexto>
                                <i className="fa-solid fa-plus"/>3<Material
                                    type="number"
                                    onChange={(e) => setVidroEmbalagem(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Copos <InputTexto>
                                <i className="fa-solid fa-plus"/>2<Material
                                    type="number"
                                    onChange={(e) => setVidroCopos(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Frasco Medicamento <InputTexto>
                                <i className="fa-solid fa-plus"/>2<Material
                                    type="number"
                                    onChange={(e) => setVidroRemedio(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                            <InputDiv>
                                Cacos/Outros <InputTexto>
                                <i className="fa-solid fa-plus"/>1<Material
                                    type="number"
                                    onChange={(e) => setVidroOutros(e.target.value)}
                                    />
                                </InputTexto>
                            </InputDiv>
                        </FormCadastro>
                    </FormContainer>
                </FormsDiv>
            </Main>
        </>

    )
}


export default RegistroColetas