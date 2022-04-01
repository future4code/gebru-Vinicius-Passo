import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const enviarForm = () => {
        navigate()
    }
    
    return(
        <div>
            <p>Tela para usuário se candidatar à viagens, vai ter o formulário de inscrição</p>

            <button onClick={goBack}>voltar</button>
            <button onClick={enviarForm}>enviar</button>
        </div>
    )
}

export default ApplicationFormPage;