import React from 'react'
import styled from 'styled-components';

const MinhaDiv = styled.div`
display: flex;
width: 30vw;
margin:auto;
max-width: 50%;
min-width: 8%;
align-items: flex-end;
height: 80vh;
margin-bottom: 1em;
word-wrap: break-word;
padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

const MeuInput = styled.input`
display: flex;
flex-direction: column;
width: 16%;
height: 4%;
margin-left: 5%;
`
const MeuSegundoInput = styled.input`
display: flex;
flex-direction: column;
width: 60%;
height: 4%;
margin-left: 2%;
`
 const Meubotao = styled.button`
 display:flex;
 width: 16%;
 height: 5%;
 margin-left: 2%;
 padding:auto;
 `
 const MinhaOutraDiv = styled.div`
 display: flex;
 align-self:flex-end;
 margin-bottom: 20%;
 flex-direction: column;
 `
 
class app extends React.Component {

  state = {
    whats: [
     {
       usuario: "",
       mensagem: ""
     }
    ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  adicionarMensagem = ()=>{

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    const novaMensagens = [...this.state.whats, novaMensagem];

    this.setState({ whats: novaMensagens })

    this.setState({ 
      valorInputMensagem: "",
      valorInputusuario: ""
    });
  }

  onchangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }
  onchangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  };

  render() {



    const listaDeCoteudo = this.state.whats.map( (pessoa) => {

      return (
        <div>
         <strong>{ pessoa.usuario }</strong> { pessoa.mensagem }
        </div>
      );
    });
    
    return (
      <MinhaDiv>
        <MeuInput
        value={this.state.valorInputUsuario}
        onChange={this.onchangeInputUsuario}
        placeholder={"Usuário"}
        />

        <MeuSegundoInput 
        value= {this.state.valorInputMensagem}
        onChange={this.onchangeInputMensagem}
        placeholder={"Mensagem"}
        />
        <Meubotao onClick={this.adicionarMensagem}>Enviar</Meubotao>

        <MinhaOutraDiv>{listaDeCoteudo}</MinhaOutraDiv>

      </MinhaDiv>
    )
  }

}

export default app 