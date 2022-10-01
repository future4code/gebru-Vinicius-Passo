import React, { useContext } from "react";
import { Headers } from "../../components/Hearder";
import { TheMovei } from "./TheMovie";
import * as Styled from './styled';
import { Nav } from "./Nav";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { PaginationControlled } from "../../components/Pagination";
import Logo from "../../assets/headers.png";
import { Button } from "@mui/material";
import { useState } from "react";


export const Movei = () => {
    const { movies, genere } = useContext(GlobalStateContext);
    const [genereKey, setGenereKey] = useState(0)


    const theMovies = movies && movies?.filter((keyGenere) => {
        return keyGenere?.genre_ids.includes(genereKey)
    })
        .map((movie) => {
            return (
                <TheMovei key={movie?.id} movie={movie} />
            )
        });

    const theMoviesAlll = movies && movies?.map((movie) => {
        return (
            <TheMovei key={movie?.id} movie={movie} />
        )
    });

    const getGenereButton = genere && genere?.genres?.map((genere) => {

        const SubmitButton = (id) => {
            setGenereKey(id)
        }

        return (
            <Button
                key={genere?.id}
                onClick={() => SubmitButton(genere?.id)}
                name={genere?.id}
                variant="contained"
                color="secondary"
            >{genere?.name}
            </Button>)
    })

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
                    {getGenereButton}
                </Styled.JoinsButons>
            </Nav>
            <Styled.ProductContent>
                {
                    genereKey === 0 ? theMoviesAlll :
                        theMovies ? theMovies : " Sem filme "
                }

            </Styled.ProductContent>

            <Styled.PaginationStyled>
                <PaginationControlled />
            </Styled.PaginationStyled>
        </Styled.ContainerMovei>
    )
}

