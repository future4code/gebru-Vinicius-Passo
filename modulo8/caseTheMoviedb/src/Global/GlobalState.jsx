import { GlobalStateContext } from "./GlobalStateContext";


export const GlobalState = (props) => {

const data = {
   vini: "vini"
}

    return (
        <GlobalStateContext.Provider value={data} >
        {props.children}
      </GlobalStateContext.Provider>
    )
}


