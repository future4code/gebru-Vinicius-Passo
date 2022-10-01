import React from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { useEffect } from "react";

export const GlobalState = (props) => {
  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [genere, setGenere] = React.useState([]);


  const getMovieAll = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=eacfdd5c4a73d7defd3e7f49f3e0624a&language=pt-BR&page=${page}`)
      .then((res) => {
        setMovies(res?.data?.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getMovieAll();
  }, [page])

   const geteGenere = () => {
        axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=eacfdd5c4a73d7defd3e7f49f3e0624a&language=pt-BR`)
        .then( (res) => {
            setGenere(res?.data)
        })
        .catch( (error) => {
          console.log(error)
        });
    }

    useEffect( () => {
      geteGenere()
    }, [])

  const data = {
    movies,
    page,
    setPage,
    genere,
    setGenere
  }

  return (
    <GlobalStateContext.Provider value={data} >
      {props.children}
    </GlobalStateContext.Provider>
  )
}


