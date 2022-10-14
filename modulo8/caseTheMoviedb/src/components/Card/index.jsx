import React from "react";
import * as Styled from "./styled";
import { gotToMovieDetail } from "../../router/coordinator"
import { useNavigate } from "react-router-dom";

export const CardsMovie = ({ movie }) => {
    const navigate = useNavigate()

    return (
        <Styled.ContainerCard onClick={() => gotToMovieDetail(navigate, movie?.id)}>
            <Styled.Content>
                <Styled.Img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
            </Styled.Content>

            <Styled.FooterCard>

                <Styled.Title>
                    {movie?.title} <br />
                    {movie?.release_date}
                </Styled.Title>

            </Styled.FooterCard>

        </Styled.ContainerCard>
    )
}