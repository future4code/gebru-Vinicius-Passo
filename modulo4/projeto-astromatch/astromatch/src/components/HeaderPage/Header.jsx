import React, { useState } from "react"
import {ContainerHeader} from "./styled"

const HeaderPage = (props) => {


  
    
    return(
        <ContainerHeader>
            
       <duv>
       <p>viniMach</p>
       </duv>

       <div>
       <button onClick={()=> props.chagePage("telaInicial")}>home</button>
       </div>
        <div>
        <button onClick={()=> props.chagePage("telaMatch")}>tela de match</button>
        </div>
        </ContainerHeader>
    )
}

export default HeaderPage;