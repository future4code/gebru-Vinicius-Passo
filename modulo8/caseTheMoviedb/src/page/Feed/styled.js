import styled from "styled-components";
import * as colors from "../../constants/colors";


export const ContainerMovei = styled`
width: 100%;
display: flex;
flex-direction: column;
border: solid 1px green;
`

export const ProductContent = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3em;
`

export const ContainerNav = styled.div`
    display: flex;
    width: 100%;
    height: 55%;
    margin-top: -1%;
    border: solid 1px green;
    background-color: ${colors.primary};
    border: solid 1px green;
`