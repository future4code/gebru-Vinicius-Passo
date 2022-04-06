import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const TripDetailsPage = () => {
    useProtectedPage();
   const params = useParams();
    const [tripDetail, setTripDetail] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
   const headers = {
                headers: {
                    auth: localStorage.getItem("token"),
                },
            };
   
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
        });
    },[])

    
    return(
        <div>
            <h1>{tripDetail?.name}</h1>
            <p> <stron>Nome: </stron> {tripDetail?.name}</p>
            <p> <stron>Descrição: </stron>{tripDetail?.description}</p>
            <p> <stron>Planeta: </stron>{tripDetail?.planet}</p>
            <p> <stron>Duração: </stron>{tripDetail?.durationInDays}</p>
            <p> <stron>Data: </stron>{tripDetail?.date}</p>
        </div>
    )
}

export default TripDetailsPage;

 // const goTripDetail = () => {
        //     const tripId = nameId.id;
        //     console.log(tripId);
            // const headers = {
            //     headers: {
            //         auth: localStorage.getItem("token"),
            //     },
            // };
        // const tripId = nameId.id;

        //     axios
        //         .get(`${BASE_URL}/trip/${tripId}`, headers)
        //         .then((res) => {
        //             setTripDetail(res.data.trip);
        //             console.log("params", params)
        //             navigate(`/detail/${tripId}`)
     
        //         })
        //         .catch((err) => {
        //             console.log("ERRO:", err.resonse);
        //         });
        // };
          // const params = useParams()