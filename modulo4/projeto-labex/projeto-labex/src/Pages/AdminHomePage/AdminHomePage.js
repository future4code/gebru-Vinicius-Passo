
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToHomePage, gotripDetail } from "../../routes/coordinator";


const AdminHomePage = () => {
    useProtectedPage();
    const navigate = useNavigate();
  
    const [trip, loadingTrip, errorTrip] = useRequestData(`${BASE_URL}/trips`);
    const [tripDetail] = useState();
    const viagens = trip?.trips;

    const lisTripNameId = viagens?.map((nameId) => {
    
        return (
            <label tripdetail={tripDetail} onClick={() => gotripDetail(navigate, nameId.id)} key={nameId.id}>
                {nameId.name}
            </label>
        );
    });

    const goCreateTrip = () => {
        navigate("/create");
    };

    return (
        <div>
            <h1>Panel Administrativo!</h1>

            <button onClick={() => goToHomePage(navigate)}>voltar</button>
            <button onClick={goCreateTrip}>criar viagem</button>
            <button onClick={() => localStorage.removeItem("token")}>Logaut</button>
            <br />
            <div >
                {loadingTrip && <p>carregando...</p>}
                {!loadingTrip && errorTrip && <p>Deu ruim carrega de novo!</p>}
                {!loadingTrip &&
                 lisTripNameId &&
                 lisTripNameId.length > 0 &&
                lisTripNameId}
            </div>

        </div>
    );
};

export default AdminHomePage;
