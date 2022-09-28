import axios from "axios";
import { useEffect } from "react";


export const getMovieDetail = (setMovieDetail, params) => {
   useEffect( () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=eacfdd5c4a73d7defd3e7f49f3e0624a&language=pt-BR`)
    .then( (res) => {
      setMovieDetail(res?.data)
    })
    .catch( (error) => {
      console.log(error)
    });
   }, [params.id])
  }
