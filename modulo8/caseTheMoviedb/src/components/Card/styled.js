import styled from "styled-components"; 

export const ContainerCard = styled.div`
    justify-content: center;
    width: 14em;
    height: 20em;
    margin: 0.5em 0;
    position: relative;
    border: solid 1px green;
    overflow: hidden;
`
export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    background-color: blue;
`
export const Title = styled.h2`
    position: absolute;
    color: white;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`
export const FooterCard = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    /* border: solid green 1px; */
` 

