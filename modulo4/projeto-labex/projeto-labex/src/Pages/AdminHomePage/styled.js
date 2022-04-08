import styled from "styled-components"

export const ContainerAdminHome = styled.div`
    display: flex;
    flex-direction: column;
<<<<<<< HEAD
    justify-content: center;
    align-items: center;
    border: solid 1px green;
    height: 100%;
    height: 100vh;
    background-color: black;
    div , p{
        color:white;
=======
   
    label{
        display: flex;
        border: 1px solid black;
        width: 350px;
        height: 40px;
        box-sizing: 0 4px 8px 0 rgba(0,0,0,0.3);
        padding: 10px 20px;
        border-radius: 4px;
        margin: 10px 0px;
        align-items: center;
        justify-content: space-between;
        width: 460px;
    &:hover{
        cursor: pointer;
        background-color: #b6d4e3;
>>>>>>> 55f3cd8d7579824df0cad1d68c7452b5ce41e6a1
    }
`
export const HomeCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 525px;
    border: solid green 1px;
    border-radius: 25px;
    border:none;
    height: 70px;
    margin: 10px 0px;
    justify-content: start;
    align-items: center;
`
export const AlignCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 475px;
    height: 70px;
    border-radius: 25px;
    padding: 0px 10px 0px 10px;
    background-color:#25007A;
    color:#E6E4F9;
    font-family: sans-serif;
    :hover{
        background-color: #06023D;
        border: solid green 2px;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 370px;
    height: 90px;
    button{
        border-radius: 25px;
    }
`
export const PossitionAbsolute = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid green;
    width: 75px;
    height: 35px;
    margin-left: 50%;
   align-items: center;
`