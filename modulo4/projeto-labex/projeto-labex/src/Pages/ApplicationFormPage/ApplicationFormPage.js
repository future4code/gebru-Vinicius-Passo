import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRequestData } from "../../hooks/useRequestData";
import { CardForm, ContainerForm, FormInput, FormSelect, TyleButton } from "./syled";
import axios from "axios"
import { useForm } from "../../hooks/useForm";


const ApplicationFormPage = () => {
    const [seleTrip] = useRequestData(`${BASE_URL}/trips`);
    const { form, onChange, cleanFields } = useForm({
        tripName: '',
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country:''
    })

    const ApplicationTrip = (event) => {
        event.preventDefault()
            axios 
            .post(`${BASE_URL}/trips/${form.tripName}/apply`, form)
            .then( () => {
               alert("usuario criado com sucesso")
            })
            .catch( (err) => {
               alert("algo deu erro")
            })
            cleanFields();
    }

    const selectTrip = seleTrip?.trips;
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
  
    return (
        <ContainerForm>
            <h1>Inscreva-se para uma viagem</h1>
            <CardForm onSubmit={ApplicationTrip}>
            
            <FormInput>
                <select 
                name={"tripName"}
                 value={form.tripName} 
                 onChange={onChange}
               >
                  <option value={""} disabled>Escolha uma viagem</option>
                   {selectTrip?.map((pais) => {
                        return <option value={pais.id} key={pais.id}>{pais.name}</option>
                    })}
               </select>
              
                <br/>
                <TextField 
                placeholder="Digite seu nome"
                label="Nome"
                name={"name"}
                 value={form.name}
                 onChange={onChange}
                 />
                <br/>
                <TextField 
                placeholder="Digite sua idade"
                label="Idade"
                type={'number'}
                name={"age"}
                value={form.age}
                onChange={onChange}
                 />
                 <br/>
                <TextField 
                placeholder="Texto de Candidatura"
                label="Texto de Candidatura"
                name={"applicationText"}
                value={form.applicationText}
                onChange={onChange}
                />
                <br/>
                <TextField 
                 placeholder="Digite sua profissão"
                label="Profissão" 
                name={"profession"}
                value={form.profession}
                onChange={onChange}
                />
                <br/>
              <TextField
              placeholder="Digite sua nacionalidade"
              label="País"
              name={"country"}
              value={form.country}
              onChange={onChange}
              />
            </FormInput>
               <br />     
            <TyleButton>
               
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
               type={"submit"}
               >Criar viagem</Button>
           </TyleButton>
         
            
            </CardForm>
        </ContainerForm>
    );
};

export default ApplicationFormPage;
