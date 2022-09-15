import React from "react";
import { AppContext } from "./contexts/AppContext";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <AppContext>
      <Home />
    </AppContext>
  );
};

export default App;
