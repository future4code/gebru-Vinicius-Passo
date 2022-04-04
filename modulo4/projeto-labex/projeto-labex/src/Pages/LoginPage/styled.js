import styled from "styled-components"

export const ContainerLogin =styled.div`
    height: 85.3vh;
    background:#30478C;
    padding-top: 7%;
`

export const CampoLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 400px;
    margin: auto;
    background: #7996C3; 
    div, h1{
        color: #E1E1ED;
        font-family: sans-serif;
    }
`

export const TextoInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px; 
   
    input{
        color: #E1E1ED;
    }
`

export const ContunButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 70px;
    background: #7996C3; 
    border: 1px solid #7996C3;
    button{
        border-radius: 25px;
        :hover{
            background: #96A6D9;
        }
    }
`