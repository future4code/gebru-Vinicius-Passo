import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRemove } from "../../hooks/useRemove";

const AdminHomePage = () => {
    useProtectedPage();
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
            <button onClick={ ()=> localStorage.removeItem("token")}>Logaut</button>
        </div>
    )
}

export default AdminHomePage;