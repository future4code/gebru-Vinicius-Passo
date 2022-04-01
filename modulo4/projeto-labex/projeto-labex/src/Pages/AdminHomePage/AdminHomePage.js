import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {

    const navigate = useNavigate()

    const goCreateTrip = () => {
        navigate("/create")
    }
    const goBack = () => {
        navigate("/")
    }
    
    return(
        <div>
            <p>sou a tela de admin preciso de um token viu</p>
            <button onClick={goBack}>voltar</button>
            <button onClick={goCreateTrip}>criar viagem</button>
            <button>Logaut</button>
        </div>
    )
}

export default AdminHomePage;