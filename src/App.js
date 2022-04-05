import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./pages/game";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}


export default App;