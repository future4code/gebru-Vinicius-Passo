import React from "react";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 12%;
    align-items: center;
    width: 45% ; 
    height: 32vh ;
    background-color: #011F26;
`

const Input = styled.input`
    border: 1px solid;
    margin-bottom: 2%;
    height: 15%;

`
const Inputs = styled.input`
    border: 1px solid;
    height: 15%;
    margin-bottom: 2%;
`
const MeuButton = styled.button`
    color: blue ;
    margin-bottom: -1%;
    height: 22%;
`
const TagP = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
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
            <Container>
                <TagP>Informações para cadastro</TagP>
               <Input
               placeholder={"Nome"}
               type="text"
               value={this.state.name}
               onChange={this.nameChange}
               />

               <Inputs
               placeholder={"E-mail"}
               type="email"
               value={this.state.email}
               onChange={this.emailChange}
               />
               <MeuButton  onClick={this.criarUsuario}>Criar usuário</MeuButton>
            </Container>
        )
    }
}

export default TelaCadastro;