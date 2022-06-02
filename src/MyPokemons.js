import React, { useEffect, useState } from "react";
import PokemonFicha from "./PokemonFicha";

function App() {
const [allPokemons, setAllPokemons] = useState([]);
const [buscaPoke, setBuscaPoke] = useState(
	"https://pokeapi.co/api/v2/pokemon?limit=20"
);

const listaPokemons = async () => {
	const res = await fetch(buscaPoke);
	const data = await res.json();
	setBuscaPoke(data.next);

	function pokemonObject(result) {
	result.forEach(async (pokemon) => {
		const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
		);
		const data = await res.json();
		setAllPokemons((currentList) => [...currentList, data]);
	});
	}
	pokemonObject(data.results);
	await console.log(allPokemons);
};
useEffect(() => {
	listaPokemons();
}, []);

return (
	<div className="app-container">
	<h1>Reino Pokemon</h1>
	<div className="pokemon-container">
		{allPokemons.map((pokemon) => (
			<PokemonFicha
			id={pokemon.id}
			name={pokemon.name}
			type={pokemon.types[0].type.name}
			altura={pokemon.height}
			peso={pokemon.weight}
			/>
		))}
	</div>
	</div>
);
}
export default App;
