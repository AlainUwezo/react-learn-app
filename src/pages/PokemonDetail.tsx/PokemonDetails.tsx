import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import { pokemons } from "../../data/mock-service";
import { Link } from "react-router-dom";

const PokemonDetails = () => {
  const params = useParams();
  const pokemon = pokemons.find((pokemon) => pokemon.id === params.id);

  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        padding: "40px",
        borderRadius: "40px",
        margin: "auto",
      }}
    >
      <img src={pokemon?.picture} />
      <div>
        <p>{pokemon?.name}</p>
        <p>{pokemon?.cp}</p>
        <p>{pokemon?.hp}</p>
        <Link to={"/"}>Retour</Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
