import styled from "styled-components";

export const ContainerCreateForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px red solid;
    height: 100vh;
`
export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    width: 450px;
    height: 400px;
    border: 1px green solid;
    border: none;
`

export const TopButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px green;
    width: 220px;
    height: 50px;
    margin: auto;
`


// fiz isso para deixar o codigo create mais limpo
export const planets = [
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