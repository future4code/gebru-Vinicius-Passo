import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { TripsCard, ContainerTrips, ButtonTrip } from "./styled";

const ListTripsPage = () => {
  const [trip, loadingTrip, errorTrip] = useRequestData(`${BASE_URL}/trips`);

  const viagens = trip?.trips;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goApplicationForm = () => {
    navigate("/inscreva-se");
  };

  const listTrips = viagens?.map((tri) => {
    return (
      <TripsCard key={tri.id}>
        <p>Nome: {tri.name}</p>
        <p> Descrição: {tri.description}</p>
        <p> Planeta: {tri.planet}</p>
        <p>Duração: {tri.durationInDays}</p>
        <p> Data: {tri.date}</p> 
      </TripsCard>
    );
  });

  return (
    <ContainerTrips>
      <ButtonTrip>
        <button onClick={goBack}>voltar</button>
        <button onClick={goApplicationForm}>inscreva-se</button>
      </ButtonTrip>
    
      <h1>Ver viagens</h1>
      {loadingTrip && <p>carregando...</p>}
      {!loadingTrip && errorTrip && <p>Deu ruim carrega de novo!</p>}
      {!loadingTrip && listTrips && listTrips.length > 0 && listTrips}
    </ContainerTrips>
  );
};

// {listTrips}

export default ListTripsPage;
