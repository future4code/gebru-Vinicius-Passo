import React from 'react';
import styled from 'styled-components';


const Borda = styled.p`
display:flex;
justify-content: start;
border: solid 1px black;
align-items: center;
margin-top: 2%;
padding-left: 2%;
/* weight:  */
height: 10vh;
`

const Cardpequeno = (props)=>{
    return (
        <div className='pequeno-container'>

          <div>
         
          <Borda>{props.email}</Borda>
              
              </div>  
        <div>

        <Borda>{props.endereco}</Borda>

        </div>
           

        </div>
    )
}
export default Cardpequeno;
