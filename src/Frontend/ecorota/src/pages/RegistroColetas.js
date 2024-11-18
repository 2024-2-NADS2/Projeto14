import styled from "styled-components"
import Header from "../components/Header"

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
    font-size: 1.25em;
    gap: 75px;
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
const RegistroColetas = () => {

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
                        <p>Plasticos</p>
                        <FormCadastro>
                            <InputDiv>
                                Garrafa Pet <InputTexto>
                                    <i className="fa-solid fa-plus"/>  <Material
                                    type="number"
                                    value={0}
                                    />  <i className="fa-solid fa-minus"/>
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