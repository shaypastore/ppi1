import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MyPokemons from "./MyPokemons";

function App() {

  return (
    <div className="App">
      <h1>Lista de Pokemons</h1>
      <nav>
        <p>
          <Link to="/mypokemons">Meus Pokemons</Link>
        </p>
      </nav>
      <Routes>
        <Route path="mypokemons" element={<MyPokemons />} />
      </Routes>
    </div>
  );
}
export default App;
