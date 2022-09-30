import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Nav } from '../../page/Feed/Nav';
import { getMovieCredits } from '../../services/movieCredits';
import { CardCast } from '../CardCast';
import { Slied } from '../Slied/Slied';
import * as Styled from "./styled";


export const CardDetail = ({ moviesDetail }) => {

    const settings = {
        spaceBetween: 30,
        slidesPerView: 4
    }

    const [movieCredtis, setMovieCredtis] = useState();

    getMovieCredits(setMovieCredtis, moviesDetail?.id);

    const listActor = movieCredtis && movieCredtis.map((credti) => {
        return (
            <SwiperSlide>
                < CardCast key={credti?.id} crdit={credti} />
            </SwiperSlide>
        )
    });

    return (
        <Styled.MovieDetailContainer>
            <Nav>
                <Styled.CloakImg src={`https://image.tmdb.org/t/p/w500${moviesDetail?.poster_path}`} />
                <Styled.JoinDivs>
                    <Styled.FilderTitle>
                        <h4> {moviesDetail?.title} </h4>
                        <span>ano do filme: {moviesDetail?.release_date}  {moviesDetail?.genres?.map(genere => genere?.name)}</span>
                    </Styled.FilderTitle>

                    <Styled.FilderSinopse>
                        <h2>Sinopse</h2>
                        <p>
                            {moviesDetail?.overview}
                        </p>
                    </Styled.FilderSinopse>
                </Styled.JoinDivs>
            </Nav>
            <br />
            <br />
            <Styled.SectionDiv>
                <h2>Elenco original.</h2>
                <Styled.DirectionCast>

                    <Slied settings={settings}>
                        {listActor}
                    </Slied>
                </Styled.DirectionCast>

            </Styled.SectionDiv>
        </Styled.MovieDetailContainer>
    )
}