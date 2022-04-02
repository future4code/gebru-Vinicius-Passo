import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { FormInput } from "./syled";

const ApplicationFormPage = () => {
    const [seleTrip] = useRequestData(`${BASE_URL}/trips`);
    const [tripName, setTripName] = useState("");
    const [name, setName] = useState("")
    const [age, setIdade] = useState("")
    const [applicationText, setCandidatura] = useState("")
    const [profession, setProfissao] = useState("")
   

    const tripOnchange = (ev) => {
        setTripName(ev.target.value);
    };
    const nomeOnchange = (ev) => {
        setName(ev.target.value);
    };
    const idadeOnchange = (ev) => {
        setIdade(ev.target.value);
    };
    const candidaturaOnchange = (ev) => {
        setCandidatura(ev.target.value);
    };
    const profissaoOnchange = (ev) => {
        setProfissao(ev.target.value);
    };


    const selectTrip = seleTrip?.trips;

    const ListTrip = selectTrip?.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
        );
    });



    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const enviarForm = () => {
        navigate();
    };

    return (
        <div>
            <p>Inscreva-se para uma viagem</p>
        
            <FormInput>
                <select placeholder="escolha" value={tripName} onChange={tripOnchange}>
                 {ListTrip}
                </select>
                <input
                 placeholder="Nome" 
                 value={name}
                 onChange={nomeOnchange}
                 />

                <input 
                placeholder="Idade"
                type={'number'}
                value={age}
                onChange={idadeOnchange}
                 />
                <input 
                placeholder="Texto de Candidatura"
                value={applicationText}
                onChange={candidaturaOnchange}
                />
                <input 
                placeholder="Profissão" 
                value={profession}
                onChange={profissaoOnchange}
                />

                <select>
                    <option>Escolha um país</option>
                </select>
            </FormInput>

            <hr />
            <div>
                <button onClick={goBack}>voltar</button>
                <button onClick={enviarForm}>enviar</button>
            </div>
        </div>
    );
};

export default ApplicationFormPage;
