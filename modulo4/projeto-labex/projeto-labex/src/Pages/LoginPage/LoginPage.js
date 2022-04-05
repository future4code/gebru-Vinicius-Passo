import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CampoLogin, ContainerLogin, ContunButton, TextoInput } from "./styled";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BASE_URL } from "../../constants/url";
import axios from "axios"
import { useProtectedPage } from "../../hooks/useProtectedPage";

const LoginPage = () => {
    useProtectedPage();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onChangeEmail = (even) => {
        setEmail(even.target.value)
    }
    const onChangePassword = (even) => {
        setPassword(even.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
      axios 
      .post(`${BASE_URL}/login`, body)
      .then(( res) => {
          localStorage.setItem("token", res.data.token)
          navigate("/admin")
          
      })  
      .catch(err => {
          alert("Você não possui autenticação, só os adm tem acesso!")
          setEmail("")
          setPassword("")
      })
    }

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
  
    return(
        <ContainerLogin>
        <CampoLogin>

            <div>
            <h1>Login</h1>
            
           </div> 
           
            <TextoInput>
                <TextField
                value={email}
                onChange={onChangeEmail}
                type={"email"}
                label="Email"
                placeholder="Digite seu  E-mail"
                />
                <br/>
                <TextField
                value={password}
                onChange={onChangePassword}
                 label="senha"
                 placeholder="Digite sua senha"
                 type={"password"}
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
            onClick={onSubmitLogin}>
            Entrar</Button>
            </ContunButton>
        </CampoLogin>

        </ContainerLogin>
    )
}

export default LoginPage;