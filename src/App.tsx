import { useState } from "react";
import "./App.css";
import { Header } from "./componets/Header/Header";
import city from "./images/città_notte.jpg";
import { Level1 } from "./page/Level1/Level1";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="levelContent">
        <Level1 />
      </div>
    </div>
  );
}

export default App;
