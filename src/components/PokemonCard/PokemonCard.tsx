import { FunctionComponent } from "react";
import { Pokemon } from "../../models/Pokemon";
import "./PokemonCard.css";
import { useNavigate } from "react-router-dom";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleClickPokemon = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <div
      className="pokemon-card"
      onClick={() => handleClickPokemon(pokemon.id)}
    >
      <div className="pokemon-card__img">
        <img
          src={pokemon.picture}
          style={{
            height: "100%",
          }}
        />
      </div>
      <div className="pokemon-card__description">
        <span>{pokemon.name}</span>
        <span>{new Date().toString()}</span>
        <div
          style={{
            display: "flex",
            gap: 2,
          }}
        >
          {pokemon &&
            pokemon.types.map((type) => (
              <span
                style={{
                  backgroundColor: "green",
                  padding: "5px 10px",
                  borderRadius: "50px",
                }}
              >
                {type}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
