import React from "react";
import React, { useState } from 'react';
import axios from "axios";

function MyPokemons() {
  const [allPokes, setAllPokemons] = useState([]);
  const [loadPoke, listaPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const carregaPokemons = async () => {
    const { data } = await Axios.get(loadPoke);
    // .next para pegar os proximos 20 pokemons quando é renderizado o componente
    listaPoke(data.next);

    function adicionaPokemon(result) {
      result.forEach(async (pokemon) => {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    adicionaPokemon(data.results);
    await console.log(allPokes); //Exibe no console os pokemons
  };
  useEffect(() => {
    carregaPokemons();
  }, []);


  const rows = state.carregaPokemons.map((pokemon) => (
    <tr key={pokemon.id}>
      <td>{pokemon.id}</td>
      <td>
        <Link to={`/detalhes/${pokemon.id}`}>{pokemon.name}</Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <p>Listagem de Pokemons</p>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default MyPokemons;

