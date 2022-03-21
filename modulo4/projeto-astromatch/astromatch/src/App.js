import React from "react"
import axios from "axios"
import CardPage from "./components/CardPage/Card";


function App() {
  
  const newRequest = () => {
    axios 
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear`)
  }
  
  return (
   <div>
     <CardPage />
     <div>
        <button onClick={()=> newRequest()}>Limpar match</button>
        </div>
   </div>
  );
}

export default App;
