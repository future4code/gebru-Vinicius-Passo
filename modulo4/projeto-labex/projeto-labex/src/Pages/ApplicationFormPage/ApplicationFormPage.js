import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import Button from '@mui/material/Button';
import { useRequestData } from "../../hooks/useRequestData";
import { FormInput } from "./syled";
import axios from "axios"


const ApplicationFormPage = () => {
    const [seleTrip] = useRequestData(`${BASE_URL}/trips`);
    const [tripName, setTripName] = useState("");
    const [nome, setName] = useState("")
    const [idade, setIdade] = useState("")
    const [texto, setCandidatura] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setCoutry] = useState("")
   
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
    const paisOnchange = (ev) => {
        setCoutry(ev.target.value);
    };


    const body = {
        name: nome,
        age: idade,
        applicationText: texto,
        profession: profissao,
        country: pais
    }


    const ApplicationTrip = () => {

            axios 
            .post(`${BASE_URL}/trips/${tripName}/apply`, body)
            .then( () => {
               alert("usuario criado com sucesso")
                setName("")
                setIdade("")
                setCandidatura("")
                setProfissao("")
                setCoutry("")
            })
            .catch( (err) => {
                console.log(err)
            })
        
    }

   
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
  
    return (
        <div>
            <p>Inscreva-se para uma viagem</p>
            
            <FormInput>
                <select  value={tripName} onChange={tripOnchange}>
                 <option>Escolha sua viagem</option>
                 {ListTrip}
                </select>
                <input
                 placeholder="Nome" 
                 value={nome}
                 onChange={nomeOnchange}
                 />

                <input 
                placeholder="Idade"
                type={'number'}
                value={idade}
                onChange={idadeOnchange}
                 />
                <input 
                placeholder="Texto de Candidatura"
                value={texto}
                onChange={candidaturaOnchange}
                />
                <input 
                placeholder="Profissão" 
                value={profissao}
                onChange={profissaoOnchange}
                />

              <input
              placeholder="País"
              value={pais}
              onChange={paisOnchange}
              />
            </FormInput>

            <hr />
            <div>
               
                <button  onClick={goBack}>voltar</button>
                <button  onClick={ApplicationTrip}>Criar viagem</button>
            </div>
        </div>
    );
};

export default ApplicationFormPage;
