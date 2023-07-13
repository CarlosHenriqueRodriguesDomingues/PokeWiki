import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import PokemonService from "../../services/PokemonService";

function Home() {
  const [listPokemon, setListPokemon] = useState([]);

  async function fetchDataOptions(type) {
    const list = await PokemonService.getPokemons(type);
    setListPokemon(list);
  }

  useEffect(() => {
    fetchDataOptions("Normal");
  }, []);

  return (
    <>
      <Header />
      <Card />
    </>
  );
}

export default Home;
