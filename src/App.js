import React from "react";
import { AppStyled } from "./App.styled";
import { Main } from "./components/main/main";
import ReduxProvider from "./store/reduxProvider.tsx";

function App() {
  return (
    <ReduxProvider>
      <AppStyled>
        <Main />
      </AppStyled>
    </ReduxProvider>
  );
}

export default App;
