import React from "react";
import axios from "axios";

const axiosConfing = {
    headers: {
        Authorization: "vinicius-duarte-gebru"
    }
}

class PlayList extends React.Component{
    state = {
        namePlayList: [],
        onClick: false
      
    }
    componentDidMount(){
        this.getAllPlayList();
    }
    getAllPlayList = () => {
        axios 
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, 
            axiosConfing
        )
        .then( (resp) => {
           
            this.setState({namePlayList: resp.data.result.list})
        })
        .catch( () => {
            alert("Erro ao criar play list")
        })
    }

    delePlayList = (idPlay) =>{
        
            axios 
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}`,
            axiosConfing   
            )
            .then( ()=> {
                alert("Play list apagado com sucesso")
                this.getAllPlayList();
            })
            .catch( ()=> {
                alert("Erro ao apagar play list")
            })
        
    }

    getPlaylistTracks = (id) => {
        axios 
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        axiosConfing
        )
        .then( (resp) => {
            this.setState({namePlayList: resp.data.result.tracks})
            // console.log(resp.data.result.tracks)
            console.log(this.state.listaDeMsc)
            this.setState({onClick: true})
        })
        .catch( () => {
            alert('erro')
        })
    }

    voltarPlayList = () => {
        this.setState({onClick: false})
    }

    render(){
        
        return(
            <div>
                <p>Play list</p>
                {this.state.namePlayList.map( (user) => {
                    if(this.state.onClick === true){
                        return (
                            <div key={user.id}>
                                <label onClick={()=> this.getPlaylistTracks(user.id)}> {user.name}  {user.artist} {user.url}</label>
                                <button onClick={()=> this.voltarPlayList()}>voltar play list</button>
                            </div>
                        )
                    } else if(this.state.onClick === false) {
                        return (
                            <div key={user.id}>
                                {user.name}
                                <button onClick={()=> this.getPlaylistTracks(user.id)}>ver detalhe</button>
                                <button onClick={()=> this.delePlayList(user.id)}> X </button>
                            </div>
                        )
                    }
                   
                })}


            </div>
        )
    }
}

export default PlayList;