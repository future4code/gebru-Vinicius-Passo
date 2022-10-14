import React from "react";
import * as Styled from "./styled";

export const CardCast = ({crdit}) => {

    return (
        <Styled.ContainerCardCast>
            <Styled.Content>
                <Styled.Img src={`https://image.tmdb.org/t/p/w500${crdit?.profile_path}`} alt={crdit?.name} />
            </Styled.Content>
            <Styled.FooterCard>
                <Styled.Title>
                    {crdit?.name}
                </Styled.Title>
            </Styled.FooterCard>
        </Styled.ContainerCardCast>
    )
}