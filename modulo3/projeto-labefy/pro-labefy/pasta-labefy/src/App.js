import React from "react";
import CriarPlayList from "./components/CriarPlayList";
import PlayList from "./components/PlayList";

class App extends React.Component {
  state = {
    paginaAtual: "cadastrar"
  }
  alterarPagina = () => {
    if(this.state.paginaAtual === "cadastrar"){
      this.setState({paginaAtual: "listaPlay"})
    } else {
      this.setState({paginaAtual: "cadastrar"})
    }
  }
    render(){
      return (
        <div>
       <button onClick={this.alterarPagina}>Trocar de página</button>
       {this.state.paginaAtual === "cadastrar" ? <CriarPlayList /> : <PlayList />}
      
        </div>
      );
    }
 
}

export default App;
