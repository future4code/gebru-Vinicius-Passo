import React, {useState, useEffect} from "react"
import styled from "styled-components"
import axios from "axios"
import FooterPage from "../FooterPage/Foter"

const ContainerImg = styled.img`
    display: flex;
    justify-content: center;
    width: 350px;
    height: 415px;
    margin-left: 8px;
`
const FooterAlinhado = styled.div`
    display: flex;
    width: 380px;
    height: 50px;
    justify-content: space-evenly ;
    align-items: center;
    
`

const EstiloDaStrings = styled.div`
      position: absolute;
      color:black;
      text-align: start;
      margin-left: 25px;;
      top: 330px;
      width: 250px;
      line-height: 30px;
      height: 30px;
`
const NomeIdade = styled.p`
    color: #fff;
    font-size: 25px;
`
const Bio = styled.p`
    color: #fff;
    font-size: 17px;
`

const MainPage = () => {


    const [perfils, setPerfils] = useState({})
    console.log(perfils)

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
    
    return(
        <>
      
       {
           <div key={perfils.id}>
           <ContainerImg  src={perfils.photo} alt={perfils.name}/>

            <EstiloDaStrings>
            <NomeIdade>{perfils.name} , {perfils.age}</NomeIdade>
            <Bio>{perfils.bio}</Bio>
           
           </EstiloDaStrings>

           </div>
       }
       <FooterAlinhado >
       <FooterPage perfils={perfils}/>
     
       </FooterAlinhado>
        </>
    )
}

export default MainPage;