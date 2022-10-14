import styled from 'styled-components';
import * as colors from "../../constants/colors";

export const ContainerVideo = styled.div`
    display: flex;
    width: 90%;
    height: 86vh;
    justify-content: center;
    margin-left: 3%;
    margin-bottom: 2%;
`

export const CardIsNotVideo = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 75vh;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 10px 10px 10px ${colors.secondary};
    overflow: scroll;
    h1{
        color: ${colors.secondary}
    }
`