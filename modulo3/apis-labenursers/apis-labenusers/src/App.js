import React from "react";
import TelaDeCadastro from "./componente/cadastro/TelaDeCadastro";
import TelaUsuario from "./componente/telaUsuario/TelaUsuario";
import axios from "axios";

class App extends React.Component {
 
      state = {
        usuarioCadastrado:[],
        name:"",
        email: ""
      }

    namePlayList = (ev) =>{
      this.setState({name: ev.target.value})
    }
    emailPlayList = (ev) =>{
      this.setState({email: ev.target.value})
    }

   
    createUser = () =>{
     const  body = {
        name: this.state.name,
        email: this.state.email
      }
      axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
        headers:{
          Authorization: "vinicius-duarte-gebru"
        }
      } )
      .then( (resp) =>{
       console.log(resp.name)
       console.log(this.state.usuarioCadastrado)
       this.setState({usuarioCadastrado: this.state.name})
        alert(`o seu nome ${this.state.name} e vc foi cadastrado`)
      })
      .catch( (err) =>{
        alert(err.response)
        console.log(err.response)
      })
    }

    getAllUsers = ()=>{
      axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers:{
          Authorization: "vinicius-duarte-gebru"
        }
      })
      .then( (res) =>{
        this.setState({usuarioCadastrado:res.data})
        // console.log(res.data)
      })
      .catch( (err) =>{
        alert(err.response)
      })
    }

    componentDidMount(){
      this.getAllUsers();
    }

    render(){

      const listaDeusuarioCadastrado = this.state.usuarioCadastrado.map( (cadastro) =>{
        return (
         <li key={cadastro.id}>{cadastro.name}</li>
        )
      })
      return (
        <div>

        <input 
        placeholder={"nome"}
        value={this.state.name}
        onChange={this.namePlayList}
        />                                                      
        <input 
        placeholder={"e-mail"}
        value={this.state.email}
        onChange={this.emailPlayList}
        />      
        <button onClick={this.createUser}>Criar usuário</button>    

        {listaDeusuarioCadastrado}                                           
        </div>
      );
    }
}

export default App;
