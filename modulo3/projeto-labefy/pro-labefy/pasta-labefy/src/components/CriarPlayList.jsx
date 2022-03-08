import React from "react";
import axios from "axios";

const axiosConfing = {
    headers: {
        Authorization: "vinicius-duarte-gebru"
    }
}

class CriarPlayList extends React.Component{
    state = {
        name:""
    }
    nameChange = (ev) => {
        this.setState({name: ev.target.value})
    }

    createPlayList = () =>{
        const body = {
            name: this.state.name
        }

        axios 
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
        body, axiosConfing
        )
        .then( () => {
            alert(`play list criar com sucesso`)
            this.setState({name:""})
        })
        .catch( () => {
            alert(`erro ao criar play list`)
        })
    }

    render(){
        return(
            <div>
               <input
               placeholder="Criar play list"
               type={"text"}
               value={this.state.name}
               onChange={this.nameChange}
               />
               <button onClick={this.createPlayList}>Adicionar play list</button>
            </div>
        )
    }
}

export default CriarPlayList;