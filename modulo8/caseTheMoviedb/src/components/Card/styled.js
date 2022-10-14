import styled from "styled-components";
import * as colors from "../../constants/colors"

export const ContainerCard = styled.div`
  background-color: white;
  box-shadow: 0 0 18px 2px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  overflow: hidden;
  font-family: sans-serif;
  height: 18rem;
  margin: 1rem;
  transition: 0.2s;
  width: 14rem;
  
  :hover {
  transform: scale(1.1);
}

`
export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;

`
export const Title = styled.h2`
    position: absolute;
    color: white;
    overflow: hidden;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    font-size: 1.4rem;
    margin-left: 0.7rem;
    margin-top: 0.5rem;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const FooterCard = styled.div`
    width: 100%;
    height: 22%;
    background-color: ${colors.primary};
`