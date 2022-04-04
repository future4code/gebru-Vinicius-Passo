import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLogin, TextoInput } from "./styled";

const LoginPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const goAdminHome = () => {
        navigate("/admin")
    }

    
    return(
        <ContainerLogin>

            <div>
            <h1>Login</h1>
           </div> 
            <TextoInput>
                <input />
                <br/>
                <input />
                <br/>
            </TextoInput>
            <br/>
            <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goAdminHome}>Entrar</button>
            </div>
        </ContainerLogin>
    )
}

export default LoginPage;