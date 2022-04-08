import styled from "styled-components"

export const ContainerAdminHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px green;
    height: 100%;
    height: 100vh;
    background-color: black;
    div , p{
        color:white;
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