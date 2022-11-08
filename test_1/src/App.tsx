import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet/Greet";
import { Application } from "./components/application/application";
import { AppProviders } from "./providers/AppProvider";
import { MuiMode } from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
