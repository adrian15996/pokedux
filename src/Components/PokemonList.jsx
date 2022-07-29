import { PokemonCard } from "./PokemonCard";
import React from "react";
import "../Styles/PokemonList.css";
const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            image={pokemon.sprites.front_default}
            name={pokemon.name}
            key={pokemon.name}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};
PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export { PokemonList };
