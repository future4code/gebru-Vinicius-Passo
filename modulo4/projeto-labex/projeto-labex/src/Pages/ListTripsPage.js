import React from "react";
import { useNavigate } from "react-router-dom"

const ListTripsPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const goApplicationForm = () => {
        navigate("/inscreva-se")
    }
    
    return(
        <div>
           <p>Tela para ver todas as viagem</p>
           <button onClick={goBack}>voltar</button>
           <button onClick={goApplicationForm}>inscreva-se</button>
        </div>

    )
}

export default ListTripsPage;