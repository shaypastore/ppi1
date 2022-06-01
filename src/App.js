import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MyPokemons from "./MyPokemons";

function App() {

  return (
    <div className="App">
      <h1>Bem-vindo ao React Router!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/mypokemons">My Pokemons</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="mypokemons" element={<MyPokemons />} />
      </Routes>
    </div>
  );
}
export default App;
