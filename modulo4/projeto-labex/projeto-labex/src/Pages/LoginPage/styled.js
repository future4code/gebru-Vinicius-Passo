import styled from "styled-components"

export const ContainerLogin =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85.3vh;
    background:black;
    padding-top: 7%;
`

export const CampoLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 400px;
    margin: auto;
    background:#06023D; 
    div, h1{
        color: #E1E1ED;
        font-family: sans-serif;
    }
`

export const TextoInput = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px; 
   
    input{
        color: white;
        border: 2px solid green;

    }
`

export const ContunButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 70px;
    background:#06023D; 
    border: 1px solid green;
    border:none;
    button{
        border-radius: 25px;
        :hover{
            background: #96A6D9;
        }
    }
`