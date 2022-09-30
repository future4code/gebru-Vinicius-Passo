import React from 'react';
import * as Styled from './styled';
import ReactPlayer from 'react-player'


export const CardVideo = ({ moviesDetail }) => {

    const renderTrailer = () => {
        const trailer = moviesDetail && moviesDetail?.videos?.results?.find(i => i?.name.includes("Trailer Oficial"))
        return (
            <Styled.ContainerVideo>
                {
                    !trailer ? (
                        <Styled.CardIsNotVideo>
                            <img src={`https://image.tmdb.org/t/p/w500${moviesDetail?.backdrop_path}`} />
                            <h1>Não tem tem trailer</h1>
                        </Styled.CardIsNotVideo>
                    ) :
                        <ReactPlayer
                            key={trailer?.key}
                            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
                            alt="video"
                            width='90%'
                            height={'100%'}
                        />
                }

            </Styled.ContainerVideo>
        )
    }

    return (
        <div >
            {
                moviesDetail?.videos ? renderTrailer() : <h2 >Filme não tem trailer!</h2>
            }
        </div>
    )
}

