import React from "react";
import theme from "./constants/theme";
import { GlobalState } from "./Global/GlobalState";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from '@mui/material/styles';


const App = () => {

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </GlobalState>
  )
}

export default App;
