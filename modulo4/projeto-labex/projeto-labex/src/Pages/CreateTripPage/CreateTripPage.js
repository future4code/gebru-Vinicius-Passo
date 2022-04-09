import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerCreateForm, InputForm, planets, TopButton } from "./styled";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CreateTripPage = () => {
    useProtectedPage();
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays:''
    })
    const headers = {
        headers: {
            auth: localStorage.getItem("token"),
        },
    };
    const enviaFormulario = (event) => {
        event.preventDefault()
        axios
        .post(`${BASE_URL}/trips`,form,headers )
        .then( ()=> {
            alert("viagem criada sucesso!")
        })
        .catch( ()=> {
            alert("erro ao criar sua")
        })
        cleanFields()
      }
     
    const goBack = () => {
        navigate(-1);
    };
     
    return (
        <ContainerCreateForm>
            <h1>Criar viagem</h1>
            <InputForm onSubmit={enviaFormulario}>
                <TextField
                placeholder={"Nome"}
                name={"name"}
                value={form.name}
                onChange={onChange}
                required
                />
                <br />
                  <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    value={form.planet}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </select>
                <br />
                <TextField
                placeholder={"Data"}
                name={"date"}
                value={form.date}
                onChange={onChange}
                type={"date"}
                required
                />
               <br />
                <TextField
                   placeholder={"Descrição"}
                   name={"description"}
                   value={form.description}
                   onChange={onChange}
                   required
                />
                <br />
                <TextField
                   placeholder={"Duração"}
                   name={"durationInDays"}
                   value={form.durationInDays}
                   onChange={onChange}
                   type={"number"}
                   required
                />
                 <br />
                <TopButton>
                <Button onClick={goBack}>Voltar</Button>
                <Button type={"submit"}>Criar</Button>
                </TopButton>
            </InputForm>
           
        </ContainerCreateForm>
    );
};

export default CreateTripPage;

 
