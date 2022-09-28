import styled from "styled-components";
import * as colors from "../../constants/colors";

export const ContainerMovei = styled.div`
width: 100%;
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
    height: 22rem;
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
`

export const JoinsButons = styled.div`
    display: flex;
    justify-content: center;
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
background-color: ${colors.secondary};
`;

export const LogoImg = styled.img`
width: 15%;
margin-left: 4.5rem;
`