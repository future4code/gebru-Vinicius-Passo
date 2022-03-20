import React from "react"
import axios from "axios"

const FooterPage = (props) => {

      const ChoosePerson = () => {
      const body = {
          id: props.id,
          choice: true
      }
      axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person`,
     body
      )
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.log(err)
      })
  }
    const like = () => {
        alert("like")
    }
    return(
        <>
        <div>
            {console.log("linha", props)}
        <button >Descurtit</button>
        </div>
        <div>
        <button onClick={()=> like()}>Curtir</button>
       
        </div>
        </>
    )
}

export default FooterPage;