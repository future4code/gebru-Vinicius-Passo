import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Headers } from "../../components/Hearder";
import Logo from "../../assets/headers.png";
import * as Styled from "./styled";
import { CardDetail } from "../../components/CardDetail";
import { getMovieDetail } from "../../services/movieDetail";


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
      <CardDetail moviesDetail={moviesDetail}/>
      </div>
    </>
  )
};