import styled from "styled-components";

export const TripsCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    word-wrap: break-word;
    width: 600px;
    height: 250px;
    background: #6382BF;
    border-radius: 25px;
    margin: 8px;
    padding-left: 25px;
     strong{
        color: #DEEFE7;
        font-family: sans-serif;
    }
    p{
        color: #DEEFE7;
        font-family: sans-serif;
    }
`

export const ContainerTrips = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color:#30478C;
    padding: 2%;
`

export const ButtonTrip = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    margin-top: 60px;
    button{
        border-radius: 25px;
        :hover{
            background: #96A6D9;
        }
    }
`
export const ListViagens = styled.div`
    margin: auto;
    h1{
        color: white;
    }
`