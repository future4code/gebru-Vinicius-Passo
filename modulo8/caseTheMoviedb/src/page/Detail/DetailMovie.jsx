import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Headers } from "../../components/Hearder";
import Logo from "../../assets/headers.png";
import * as Styled from "./styled";
import { CardDetail } from "../../components/CardDetail";
import { getMovieDetail } from "../../services/movieDetail";
import { CardVideo } from "../../components/Video/CardVideo";
import { Button } from "@mui/material";
import {gotoBack} from "../../router/coordinator"



export const DetailMovei = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [moviesDetail, setMovieDetail] = useState({})

  getMovieDetail(setMovieDetail, params)

  return (
    <>
      <Headers>
        <Styled.NavBar>
          < Styled.LogoImg src={Logo} alt="logo do site" />
        </Styled.NavBar>
      </Headers>

      <div>
        <CardDetail moviesDetail={moviesDetail} />
      </div>
      <Styled.DivGlobalCardVideo>
        <h2>Trailer</h2>
        <CardVideo moviesDetail={moviesDetail} />
      </Styled.DivGlobalCardVideo>

      <Styled.ButtonGoBackHome>
        <Button
          onClick={() => gotoBack(navigate)}
          variant="contained"
          color='secondary'
          fullWidth
        >Voltar</Button>
      </Styled.ButtonGoBackHome>
    </>
  )
};