import React from "react";
import { useNavigate } from "react-router-dom";
import { CampoLogin, ContainerLogin, ContunButton, TextoInput } from "./styled";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <CampoLogin>

            <div>
            <h1>Login</h1>
           </div> 
           
            <TextoInput>
                <TextField
                label="Nome"
                placeholder="Digite seu nome"
                />
                <br/>
                <TextField
                 label="Email"
                 placeholder="Digite seu E-mail"
                 type={"email"}
                />
                <br/>
            </TextoInput>
            <br/>
            <ContunButton>
            <Button 
            size="large" 
            variant="contained" 
            color="secondary"
            onClick={goBack}>
            Voltar</Button>
            <Button 
            size="large" 
            variant="contained" 
            color="secondary"
            onClick={goAdminHome}>
            Entrar</Button>
            </ContunButton>
        </CampoLogin>

        </ContainerLogin>
    )
}

export default LoginPage;