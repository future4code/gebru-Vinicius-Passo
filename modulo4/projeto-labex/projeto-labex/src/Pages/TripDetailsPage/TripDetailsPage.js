import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerTripDetail } from "./styled";

const TripDetailsPage = () => {
    useProtectedPage();
    const navigate = useNavigate();
   const params = useParams();
    const [tripDetail, setTripDetail] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
   const headers = {
                headers: {
                    auth: localStorage.getItem("token"),
                },
            };
   // Requisição para pegar o detalhes da viagem
    useEffect( () => {
        setIsLoading(true)
        axios
        .get(`${BASE_URL}/trip/${params.id}`, headers)
        .then((res) => {
            setTripDetail(res.data.trip);
            setIsLoading(false)
        })
        .catch((err) => {
            setError("ERRO:", err.resonse);
            setIsLoading(false)
        });
    },[params.id])

    // Requisição para candidatos pendentes 
    const listCandidatesPendant =  tripDetail?.candidates.map( (pendantCandidate) => {
        const approve = (decision) => {
            const body = {
                approve: decision
            }
           axios 
           .put(`${BASE_URL}/trips/${params.id}/candidates/${pendantCandidate.id}/decide`, body, headers)
           .then( res => {
               alert(`Decisão registrada com sucesso`)
             
           })
           .catch( err => {
               alert("Error ao aprovar candidato")
           })
        }
     
        return(
         <div key={pendantCandidate.id}>
            <p><b>Nome:</b> {pendantCandidate.name} </p>
            <p><b>Profissão:</b> {pendantCandidate.profession} </p>
            <p><b>idade:</b> {pendantCandidate.age} </p>
            <p><b>País:</b> {pendantCandidate.country} </p>
            <p><b>Texto de Candidatura:</b> {pendantCandidate.applicationText} </p>

            <div>
                  <button onClick={()=> approve(true)}>Aprovar</button>
                  <button onClick={()=> approve(false)}>Reprovar</button>
           </div>
        </div>
        )
    } )

    //   Requisição para candidatos pendentes 
      const listCandidatesApproved = tripDetail?.approved.map( (listProved) => {
          return(
              <div key={listProved.id}>
                  <p>{listProved.name}</p>
              </div>
          )
      })

    return(
        <ContainerTripDetail>
           <div>
           <h1>{tripDetail?.name}</h1>
            <p> <stron>Nome: </stron> {tripDetail?.name}</p>
            <p> <stron>Descrição: </stron>{tripDetail?.description}</p>
            <p> <stron>Planeta: </stron>{tripDetail?.planet}</p>
            <p> <stron>Duração: </stron>{tripDetail?.durationInDays}</p>
            <p> <stron>Data: </stron>{tripDetail?.date}</p>
           </div>
           <br/>
           <div>
               <button onClick={()=> navigate(-1)}>Voltar</button>
           </div>
           <div>
               <h3>Candidatos pendes</h3>
               <br/>
               {/* {listCandidatesPendant} */}
               {isLoading && <p>carregando...</p>}
               {!isLoading && error && <p>Falha ao carregar!</p>}
               {!isLoading && listCandidatesPendant && listCandidatesPendant.length > 0 && listCandidatesPendant}
               {!isLoading && listCandidatesPendant && listCandidatesPendant.length === 0 && listCandidatesPendant &&
                <p>Não há candidatos pendentes</p>}
           </div>
           <div>
               <h3>Candidatos aprovados</h3>
             {/* {listCandidatesApproved} */}
              {isLoading && <p>carregando...</p>}
               {!isLoading && error && <p>Falha ao carregar!</p>}
               {!isLoading && listCandidatesApproved && listCandidatesApproved.length > 0 && listCandidatesApproved}
               {!isLoading && listCandidatesApproved && listCandidatesApproved.length === 0 && listCandidatesApproved &&
                <p>Não há candidatos aprovado</p>}
           </div>
         
        </ContainerTripDetail>
    )
}

export default TripDetailsPage;