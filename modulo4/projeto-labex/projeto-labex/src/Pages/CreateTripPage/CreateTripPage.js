import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage();

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>
        </div>
    );
};

export default CreateTripPage;
