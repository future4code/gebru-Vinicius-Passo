import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const MatchImg = styled.img`
    width: 50px ;
    height: 50px;
`

const ListMatch = () => {
    const [usuarios, setUsuarios] = useState([])

    const pegaUsuarios = () => {
        axios 
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/matches`)
        .then( (res) => {
            setUsuarios(res.data.matches)
        })
        .catch(err => {
            console.log(err)
        })
    }
  useEffect( () => {
    pegaUsuarios()
  }, [])

    
    return(
        
        <>
        <p>sou a lista de match bebes</p>
       {usuarios.map( (usuario) => {
           return(
               <div key={usuario.id}>
                   <MatchImg src={usuario.photo}/>
                   <p>{usuario.name}</p>
               </div>
           )
       })}
        </>
    )
}
export default ListMatch;