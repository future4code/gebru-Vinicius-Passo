
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToHomePage, gotripDetail } from "../../routes/coordinator";
import { AlignCards, ContainerAdminHome, ContainerButton, HomeCard } from "./styled";
import Button from '@mui/material/Button';
import axios from "axios";


const AdminHomePage = () => {
    useProtectedPage();
    const navigate = useNavigate();
  
    const [trip, loadingTrip, errorTrip] = useRequestData(`${BASE_URL}/trips`);
    const [tripDetail] = useState();
    const viagens = trip?.trips;


    const logaut = ()=>{
        localStorage.removeItem('token')
        goToHomePage(navigate)
    }
    const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    
    const lisTripNameId = viagens?.map((nameId) => {
        const deleteTrip = (id) => {
            axios
            .delete(`${BASE_URL}/trips/${id}`, headers)
            .then( ()=> {
             alert("deletada com sucesso")
            })
            .catch( ()=> {
                alert("erro meu bem, olha seu codigo de novo")
            })
        }
        return (
            <HomeCard>
          <AlignCards>
            <label tripdetail={tripDetail} onClick={() => gotripDetail(navigate, nameId.id)} key={nameId.id}>
                {nameId.name}

            </label>
        
            <Button 
            onClick={()=> deleteTrip(nameId.id)}
            variant="outlined" 
            size="small"
            color="error">
              Delete
              </Button>
          </AlignCards>
            </HomeCard>
        );
    });

    const goCreateTrip = () => {
        navigate("/create");
    };

    return (
        <ContainerAdminHome>
            <h1>Panel Administrativo!</h1>
            <ContainerButton>
            <Button color="secondary" variant="contained" size="medium" onClick={() => goToHomePage(navigate)}>voltar</Button>
            <Button color="secondary" variant="contained" size="medium" onClick={goCreateTrip}>criar viagem</Button>
            <Button color="secondary" variant="contained" size="medium" onClick={() => logaut()}>Logaut</Button>
            </ContainerButton>
            <br />
            <div >
                {loadingTrip && <p>carregando...</p>}
                {!loadingTrip && errorTrip && <p>Deu ruim carrega de novo!</p>}
                {!loadingTrip &&
                 lisTripNameId &&
                 lisTripNameId.length > 0 &&
                lisTripNameId}
                {!loadingTrip &&
                 lisTripNameId &&
                 lisTripNameId.length === 0 &&
                lisTripNameId && <h3>Não a viagens</h3>}
                
            </div>

        </ContainerAdminHome>
    );
};

export default AdminHomePage;
