import React from "react";
import { Headers } from "../../components/Hearder";
import { TheMovei } from "./TheMovie";
import * as Styled from './styled';
import {Nav} from "./Nav";


export const Movei = () => {
    return(
        <Styled.ContainerMovei>
        <Headers />
        <Nav />
        <TheMovei />
        </Styled.ContainerMovei>
    )
}