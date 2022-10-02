import styled from "styled-components";
import * as colors from "../../constants/colors";

export const ContainerMovei = styled.div`
width: 99.88%;
display: flex;
flex-direction: column;
`

export const ProductContent = styled.div`
    width: 92%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.5em;
`

export const ContainerNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 24rem;
    margin-top: -1%;
    border: solid 1px green;
    background-color: ${colors.primary};
    border: solid 1px green;
`

export const Descripitontext = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    h1 {
        color: white;
        font-family: Roboto;
    }

    @media  screen and (min-width: 320px) and (max-width: 650px){
        h1 {
         display: flex;
        justify-content: end;
        color: white;
        font-family: Roboto;
         font-size: 1.1em;
    }
    }
`

export const JoinsButons = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
    padding: 3%;
`

export const PaginationStyled = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 2.5%;
    color:  ${colors.primary};
    align-items: center;
    justify-content: center;
`

export const NavBar = styled.footer`
width: 100%;
height: 100%;
display: flex;
align-items: center;
margin-top: 1%;
background-color: ${colors.secondary};

@media  screen and (min-width: 320px) and (max-width: 650px){
        background-color: ${colors.secondary};
        margin-top: 4%;
        display: flex;
        align-items: center;
    }
`;

export const LogoImg = styled.img`
width: 15%;
margin-left: 4.5rem;
`