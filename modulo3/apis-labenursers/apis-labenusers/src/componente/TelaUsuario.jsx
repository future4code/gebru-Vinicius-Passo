import axios from "axios"
import React from "react"

const axiosConfig = {
    headers:{
        Authorization: "vinicius-duarte-gebru"
    }
}

class TelaUsuario extends React.Component{
    state={
        listaUsuario: [],
        paginaAtual: "listaUsuario",
        idUsuario: "",
        name: ""
    }

    componentDidMount(){
        this.buscaUsuarioLista();
    }
    buscaUsuarioLista = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
        )
        .then( (resp) => {
            this.setState({listaUsuario: resp.data});
        })
    }
    exclusaoUsuario = (idUsuario) => {
        if (("Você vai apagar o usuário da lista, é isso que quer fazer?")){
            axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
            axiosConfig
            )
            .then( () => {
                alert("Usuário apagado com sucesso!")
                this.buscaUsuarioLista();
            })
            .catch( () => {
                alert("Erro ao apagar o usuário")
            })
        }
    }
    nameChange = (ev) => {
        this.setState({name: ev.target.value})
    }
    idNameChange = (ev) => {
        this.setState({idUsuario: ev.target.value})
    }
    pesquisarPorNome = () => {
        axios 
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name${this.state.name}=&email=`,
        axiosConfig
        )
        .then( (resp) => {
            this.setState({listaUsuario: resp.data})
        })
        .catch ( () => {
            alert("Erro ao criar o usuário")
        })
    }
    render(){
        return(
            <div>
              {this.state.paginaAtual === "listaUsuario" ? (
                  <div>
                      <ul>
                          {this.state.listaUsuario.length === 0 && <div>Atualizando...</div>}
                          {this.state.listaUsuario.map( (user) => {
                              return (
                                  <li>
                                      <span>
                                        {user.name}
                                      </span>
                                      <button 
                                      onClick={()=> this.exclusaoUsuario(user.id)}
                                      >
                                          X
                                      </button>
                                  </li>
                              )
                          })}
                      </ul>
                     
                  </div>
              ): (
                  <div idUsuario={this.state.idNameChange} paginaAtual={this.state.paginaAtual}/>
              )}
            </div>
        )
    }
}

export default TelaUsuario;