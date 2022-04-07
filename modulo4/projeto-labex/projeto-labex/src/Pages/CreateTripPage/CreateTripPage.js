import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerCreateForm, InputForm } from "./styled";
import { useForm } from "../../hooks/useForm";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { BASE_URL } from "../../constants/url";



const CreateTripPage = () => {
    useProtectedPage();

    const navigate = useNavigate();

    const goBack = (event) => {
        event.preventDefault()
        navigate(-1);
    };
     const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
      })
    const planetas = [
        "Mercúrio",
        "Vênus",
        "Terra",
        "Marte",
        "Jupiter",
        " Saturo",
        "Urano",
        "Neturno",
        " Plutão"
    ]
    const headers = {
        headers: {
            auth: localStorage.getItem("token"),
        },
    };

    const enviaFormulario = (event) => {
        event.preventDefault()
        axios
        .post(`${BASE_URL}/trips`, form , headers)
        .then( ()=> {
            alert("Viagem criada com sucesso!")
        })
        .catch( ()=> {
            alert("Erro ao criar viagem")
        })
        cleanFields()
      }
     
    return (
        <ContainerCreateForm>

            <h1>Criar viagem</h1>
            <br/>
            <div>
             <form onSubmit={enviaFormulario}>
                 <InputForm>
                 <TextField
                 placeholder="Nome"
                 label="Nome"
                 name={'name'}
                 value={form.name}
                 onChange={onChange}
                 required
                 inputProps={{ pattern: '^.{5,}' }}
                 title={'O nome deve ter no mínimo 5 caracteres'}
                 />
            
                 <br/>
                 <Select
                 placeholder="Planeta"
                 name={'planet'}
                 value={form.planet}
                 onChange={onChange}
                 required
                 defaultValue={""}
                 >
                 <MenuItem value={""} disabled>Escolha um Planeta</MenuItem>    
                {planetas.map( (planeta) => {
                 return (  
                 <MenuItem value={planeta} >{planeta}</MenuItem>
                 )
                })}
                 </Select>
                  
                 <br/>
                 <TextField 
                   placeholder="Data"
                   type={"date"}
                   name={'date'}
                   value={form.date}
                   onChange={onChange}
                   required
                 />
            
                 <br/>
                 <TextField
                     placeholder="Descrição"
                     label="Descrição"
                     name={'description'}
                     value={form.description}
                     onChange={onChange}
                     required
                     inputProps={{ pattern: '^.{30,}' }}
                     title={"O nome deve ter no mínimo 30 caracteres"}
                 />
               
                   <br/>
                   <TextField
                     placeholder="Duração"
                     label="Duração"
                     name={'durationInDays'}
                     value={form.durationInDays}
                     onChange={onChange}
                     required
                     type={"number"}
                    //  min={50}
                     inputProps={{ min: 50 }}
                     title={"Insira um valor igual a 50 ou maior"}
                 />
              
                 </InputForm>
             <div>
             <br/>
                <button onClick={goBack}>Voltar</button>
                <button type="submit">Criar</button>
            </div>
             </form>
            </div>
      
         
        </ContainerCreateForm>
    );
};

export default CreateTripPage;

 
