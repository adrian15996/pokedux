import { Col, Spin } from "antd";
import "./Styles/App.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Searcher } from "./Components/Searcher";
import { PokemonList } from "./Components/PokemonList";
import logo from "./assets/statics/logo.svg";
import React from "react";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading, shallowEqual);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPokemonWithDetails());
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
