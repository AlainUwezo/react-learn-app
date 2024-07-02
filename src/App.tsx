import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PokemonDetails from "./pages/PokemonDetail.tsx/PokemonDetails";
import PokemonList from "./pages/PokemonList/PokemonList";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="" element={<PokemonList />} />
          <Route path=":id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
