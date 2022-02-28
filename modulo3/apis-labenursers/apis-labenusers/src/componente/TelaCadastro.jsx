import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component{
    state = {
        name: "",
        email: ""
    }

    nameChange = (ev) => {
        this.setState({name: ev.target.value})
    }
    emailChange = (ev) => {
        this.setState({email: ev.target.value})
    }

    criarUsuario = () => {
        const axiosConfing = {
            headers:{
                Authorization: "vinicius-duarte-gebru"
            }
        };

       const body = {
           name: this.state.name,
           email:this.state.email
       };

       axios
       .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
       body,
       axiosConfing
       )
       .then( ()=>{
            alert(`usuário ${this.state.name} cadastrado com sucesso`);
            this.setState({name: "", email: ""})
       })
       .catch( (err)=> {
        alert(`erro ao criar usuário`)
        console.log(err);
       })
    }

    render(){
        return(
            <div>
               <input
               placeholder={"Nome"}
               type="text"
               value={this.state.name}
               onChange={this.nameChange}
               />

               <input
               placeholder={"E-mail"}
               type="email"
               value={this.state.email}
               onChange={this.emailChange}
               />
               <button onClick={this.criarUsuario}>Criar usuário</button>
            </div>
        )
    }
}

export default TelaCadastro;