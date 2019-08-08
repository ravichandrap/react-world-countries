import React from "react";
import logo from "./logo.svg";
import "./App.css";

import WorldCountries from "./components/WorldCounties";

function App() {
  return (
    <div>
      <header>
        <WorldCountries />
      </header>
    </div>
  );
}

export default App;
