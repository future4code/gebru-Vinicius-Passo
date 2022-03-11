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
        onClick: 'false',
        name: "", 
        artist: "",
        url: ""
       
    }
    nameInput = (ev) => {
        this.setState({name: ev.target.value})
    }

    artistaInput = (ev) => {
        this.setState({artist: ev.target.value})
    }

    urlInput = (ev) => {
        this.setState({ url: ev.target.value})
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
            
            this.setState({onClick: 'true'})
        })
        .catch( () => {
            alert('erro')
        })
    }
    addTrackToPlayList = (id) => {
        const bory = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        bory,axiosConfing
        )
        .then(()=>{
           this.setState({
            name: "",
            artist: "",
            url: ""
           })
           alert('msc add com sucesso')
        })
        .catch(()=> {
            alert('Erro ao adicionar musica a play list')
        })
    }

    voltarPlayList = () => {
        this.setState({onClick: 'false'})
        this.getAllPlayList();
    }

    render(){
        
        return(
            <div>
               
                {this.state.namePlayList.map( (user) => {
                    
                    if(this.state.onClick === 'true'){
                        return (
                            <div key={user.id}>
                               
                                <label 
                                onClick={()=> this.getPlaylistTracks(user.id)}> {user.name}  
                                 <audio  controls={"controls"}>
                                     
                                     <source src={user.url} type="audio/mp3"/>
                                     </audio>
                                  
                                </label>
                                <button onClick={()=> this.voltarPlayList()}>voltar play list</button>
                          
                            </div>
                            
                        )
                    } else if(this.state.onClick === 'false') {
                        return (
                            <div key={user.id}>
                                <p>Play list</p>
                                {user.name}
                                <button onClick={()=> this.getPlaylistTracks(user.id)}>ver detalhe</button>
                                <button onClick={()=> this.delePlayList(user.id)}> X </button>

                                <div>
                                    <p><b>Adicione msc a sua play list</b></p>
                                    <input
                                placeholder="nome"
                                type={"text"}
                                value={this.state.name}
                                onChange={ this.nameInput}
                                />
                              
                                <input
                               
                                placeholder="artista"
                                type={"text"}
                                value={this.state.artist}
                                onChange={ this.artistaInput}
                                />
                                
                                <input
                               
                                placeholder="url da msc"
                                type={"text"}
                                value={this.state.url}
                                onChange={ this.urlInput}
                                />
                               
                                <button onClick={()=> this.addTrackToPlayList(user.id)}>Adicionar</button>
                               
                             </div>
                            </div>
                        )
                    } 
                   
                })}

            </div>
        )
    }
}

export default PlayList;