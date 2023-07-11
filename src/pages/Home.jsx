import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import PokemonService from "../services/PokemonService";

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
    <div>
      <Card
        photo={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        }
        name={"Bulbasaur"}
        number={"012"}
      />
    </div>
  );
}

export default Home;
