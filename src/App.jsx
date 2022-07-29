import { Col, Spin } from "antd";
import "./Styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { Searcher } from "./Components/Searcher";
import { PokemonList } from "./Components/PokemonList";
import logo from "./assets/statics/logo.svg";
import React from "react";
import { getPokemon } from "./api/index";
import { getPokemonsWithDetails, setLoading } from "./actions/index";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const res = await getPokemon();
      dispatch(getPokemonsWithDetails(res));
      console.log(res);
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
