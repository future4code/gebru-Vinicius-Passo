import axios from "axios";
import { useEffect } from "react";

export const getMovieCredits = (setMovieCredtis, id) => {
   useEffect( () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=eacfdd5c4a73d7defd3e7f49f3e0624a&language=pt-BR`)
    .then( (res) => {
      setMovieCredtis(res?.data?.cast)
    })
    .catch( (error) => {
      console.log(error)
    });
   }, [id])
  }
