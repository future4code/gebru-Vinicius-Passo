import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Headers } from "../../components/Hearder";
import Logo from "../../assets/headers.png";
import * as Styled from "./styled";
import { CardDetail } from "../../components/CardDetail";
import { getMovieDetail } from "../../services/movieDetail";
import { CardVideo } from "../../components/Video/CardVideo";


export const DetailMovei = () => {
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
    </>
  )
};