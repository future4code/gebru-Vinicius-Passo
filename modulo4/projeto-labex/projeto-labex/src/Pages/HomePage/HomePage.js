import React from "react";
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()

    const gotToTrip = () => {
        navigate("/viagens")
    }
    const goLogin = () => {
        navigate("/login")
    }
    return(
        <div>
          
            <button onClick={gotToTrip}>Ver viagens</button>
            <button onClick={goLogin}>Área de Admin</button>
        </div>
    )
}

export default HomePage;