import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const goAdminHome = () => {
        navigate("/admin")
    }

    
    return(
        <div>
            <p>para fazermos login como adim</p>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goAdminHome}>Entrar</button>
        </div>
    )
}

export default LoginPage;