import React, {useState, useEffect} from "react"
import styled from "styled-components"
import axios from "axios"
import FooterPage from "../FooterPage/Foter"

const ContainerImg = styled.img`
    width: 250px;
    height: 250px;
`
const FooterAlinhado = styled.div`
    display: flex;
    width: 385px;
    height: 70px;
  
    justify-content: space-evenly ;
    align-items: center;
`

const MainPage = () => {


    const [perfils, setPerfils] = useState({})

    const pegaPefil = () => {
        axios 
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/person`)
        .then( (res) => {
            setPerfils(res.data.profile)
        })
        .catch( err => {
            alert(err)
        })
    }
    useEffect( () => {
        pegaPefil();

    },[])
    const like = () =>{
        alert("curtiu")
    }
    return(
        <>
      
       {
           <div key={perfils.id}>
           <ContainerImg  src={perfils.photo} alt={perfils.name}/>
           <p>{perfils.name}</p>
           <p>{perfils.bio}</p>
           <p>{perfils.age}</p>
           </div>
       }
       <FooterAlinhado >
       <FooterPage perfils={perfils}/>
     
       </FooterAlinhado>
        </>
    )
}

export default MainPage;