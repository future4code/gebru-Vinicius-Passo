import React from "react";
import TelaCadastro from "./componente/TelaCadastro";
import TelaUsuario from "./componente/TelaUsuario";

class App extends React.Component{
  state = {
    paginaAtual:"inscrito"
  }
  alteraPagina = () => {
    if(this.state.paginaAtual === "inscrito"){
      this.setState({paginaAtual: "cadastro"})
    } else {
      this.setState({paginaAtual: "incrito"})
    }
  }
  render(){

    return(
      <div>
        <button onClick={this.alteraPagina}>Troca de página</button>
        {this.state.paginaAtual === "inscrito" ? <TelaCadastro /> : <TelaUsuario />}
      </div>
    )
  }
}
export default App;