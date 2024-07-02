import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonList.css";
import { pokemons } from "../../data/mock-service";
import { Pokemon } from "../../models/Pokemon";

const PokemonList = () => {
  return (
    <div className="pokemons">
      <h2>Pokemon List</h2>
      <div className="pokemon-list">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
