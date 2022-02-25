import React from "react";
import TelaUsuario from "../telaUsuario/TelaUsuario";



class TelaDeCadastro extends React.Component{

    render(){

        return(
            <div>
               <button>Tocar de tela</button>
            <input 
            placeholder="Nome"
            />
            <input 
            placeholder="E-mail"
            />
           <button>Criar usuário</button>
            </div>
        )
    }
}

export default TelaDeCadastro;