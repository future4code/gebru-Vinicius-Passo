import React from 'react'
import styled from 'styled-components';

const MinhaDiv = styled.div`
display: flex;
align-items: flex-end;
width: 40vw;
height: 80vh;
border:solid 1px black;
margin: auto;
`

const MeuInput = styled.input`
display: flex;
flex-direction: column-reverse;
align-self:flex-end;
align-items: center;`

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

        <MeuInput
        value= {this.state.valorInputMensagem}
        onChange={this.onchangeInputMensagem}
        placeholder={"Mensagem"}
        />
        <button onClick={this.adicionarMensagem}>Enviar</button>

        <div>{listaDeCoteudo}</div>
      </MinhaDiv>
    )
  }

}

export default app 