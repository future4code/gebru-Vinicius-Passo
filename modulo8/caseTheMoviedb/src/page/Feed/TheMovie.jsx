import React from "react";
import { CardsMovie } from "../../components/Card";


export const TheMovei = ({movie}) => {

  return (
    <div>
      <CardsMovie movie={movie}/>
    </div>
  )
}