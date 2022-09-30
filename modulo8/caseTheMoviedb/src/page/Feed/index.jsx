import React, { useContext } from "react";
import { Headers } from "../../components/Hearder";
import { TheMovei } from "./TheMovie";
import * as Styled from './styled';
import { Nav } from "./Nav";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { PaginationControlled } from "../../components/Pagination";
import Logo from "../../assets/headers.png";
import { Button } from "@mui/material";


export const Movei = () => {
    const { movies } = useContext(GlobalStateContext);
    const theMovies = movies && movies?.map((movie) => {
        return <TheMovei key={movie?.id} movie={movie} />
    });

    return (
        <Styled.ContainerMovei>
            <Headers>
                <Styled.NavBar>
                    < Styled.LogoImg src={Logo} alt="logo do site" />
                </Styled.NavBar>
            </Headers>
            <Nav>
                <Styled.Descripitontext>
                    <h1> Milhões de filmes e séries e pessoas <br /> para descobrir.
                        Explore já.
                    </h1>
                </Styled.Descripitontext>
                <Styled.JoinsButons>
                    <Button color="secondary">Comédia</Button>
                    <Button color="secondary">Ação</Button>
                    <Button color="secondary">Anime</Button>
                    <Button color="secondary">Romance</Button>
                    <Button color="secondary">Terror</Button>
                    <Button color="secondary">Lançamento</Button>
                    <Button color="secondary">Comédia</Button>
                </Styled.JoinsButons>
            </Nav>
            <Styled.ProductContent>
                {theMovies ? theMovies : "Braian felipe tem que estudar muito  "}

            </Styled.ProductContent>

            <Styled.PaginationStyled>
                <PaginationControlled />
            </Styled.PaginationStyled>
        </Styled.ContainerMovei>
    )
}