import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRequestData } from "../../hooks/useRequestData";
// import { CardForm, ContainerForm, FormInput, FormSelect, TyleButton } from "./syled";
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
            <h1>Inscreva-se para uma viagem</h1>
            <div>
            <div>
              
                <slect
                 select
                 label="Escolha sua viagem" 
                 value={tripName} 
                 helperText="Please select your currency"
                 onChange={tripOnchange}
               >
                   <option>Escolha uma viagem</option>
                   {ListTrip}
               </slect>
                <br/>
                <TextField 
                placeholder="Digite seu nome"
                label="Nome"
                 value={nome}
                 onChange={nomeOnchange}
                 />
                <br/>
                <TextField 
                placeholder="Digite sua idade"
                label="Idade"
                type={'number'}
                value={idade}
                onChange={idadeOnchange}
                 />
                 <br/>
                <TextField 
                placeholder="Texto de Candidatura"
                label="Texto de Candidatura"
                value={texto}
                onChange={candidaturaOnchange}
                />
                <br/>
                <TextField 
                 placeholder="Digite sua profissão"
                label="Profissão" 
                value={profissao}
                onChange={profissaoOnchange}
                />
                <br/>
              <TextField
              placeholder="Digite sua nacionalidade"
              label="País"
              value={pais}
              onChange={paisOnchange}
              />
            </div>

            <hr />
            <button>
               
                <Button 
                size="large" 
                variant="contained" 
                color="secondary"  
                onClick={goBack}
                >voltar</Button>
                <Button  
                size="large"
                variant="contained"
                color="secondary" 
                onClick={ApplicationTrip}
                >Criar viagem</Button>
            </button>
            </div>
        </div>
    );
};

export default ApplicationFormPage;
