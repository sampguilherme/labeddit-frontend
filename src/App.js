import React from "react";
import { createGlobalStyle } from "styled-components"
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalState } from "./contexts/GlobalStates";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./Router/Router"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {

  const context = GlobalState()

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <GlobalStyle/>
          <Router/>
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;
