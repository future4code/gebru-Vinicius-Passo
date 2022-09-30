import styled from "styled-components";

export const MovieDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

export const CloakImg = styled.img`
  position: absolute;
  width: 24vw;
  height: 28vw;
  left: 7%;
  top: 3em;
  object-fit: cover;
`

export const DirectionCast = styled.div`
    display: flex;
    object-fit: cover;
    width: 80vw;
    margin: auto;
`

export const JoinDivs = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 35%;
    margin-top: 1%;
    width: 62%;
    height: 95%;
    overflow: hidden;
`

export const FilderTitle = styled.div`
    h4{
      display: flex;
      font-family: 'Roboto';
       color: #FFFFFF;
       font-weight: 700;
       font-size: 2rem;
    }

    span{
      font-family: 'Roboto';
      font-weight: 400;
      font-style: normal;
      font-size: 1,25rem;
      color: #FFFFFF;
    }
`

export const FilderSinopse = styled.div`
  h2{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 44%;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
    }

    p{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2em;
       line-height: 24px;
       color: #DDDDDD;
    }
 
 `

export const SectionDiv = styled.div`
  h2{
    color: black;
    margin-left: 7%;
  }
 `