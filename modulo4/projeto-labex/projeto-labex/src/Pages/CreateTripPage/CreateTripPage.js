import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerCreate } from "./styled";

const CreateTripPage = () => {
    useProtectedPage();
    const navigate = useNavigate();

    const { form, onChange, cleanFields} = useForm({
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
      const planets = [
        "Mercurio",
        "Vênus",
        "Terra",
        "Marte",
        "Jupiter",
        "Saturno" ,
        "Urano",
        "Nertuno",
        "Plutão"
      ]
    const goBack = () => {
        navigate(-1);
    };

    return (
        <ContainerCreate>
            <h1>Criar viagem</h1>
            <form onSubmit={enviaFormulario}>
                <input
                placeholder={"Nome"}
                name={"name"}
                value={form.name}
                onChange={onChange}
                required
                />
          
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
                <input
                placeholder={"Data"}
                name={"date"}
                value={form.date}
                onChange={onChange}
                type={"date"}
                required
                />
           
                <input
                   placeholder={"Descrição"}
                   name={"description"}
                   value={form.description}
                   onChange={onChange}
                   required
                />
               
                <input
                   placeholder={"Duração"}
                   name={"durationInDays"}
                   value={form.durationInDays}
                   onChange={onChange}
                   type={"number"}
                   required
                />
                <div>
                <button onClick={goBack}>Voltar</button>
                <button type={"submit"}>Criar</button>
                </div>
            </form>
           
        </ContainerCreate>
    );
};

export default CreateTripPage;
