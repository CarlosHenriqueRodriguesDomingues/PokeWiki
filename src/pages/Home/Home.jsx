import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import PokemonService from "../../services/PokemonService";
import Select from "../../components/Select/Select";
import { TypePokemon } from "../../utils/EnumPokemon";

function Home() {
  const [listPokemon, setListPokemon] = useState([]);
  const [pokeType, setPokeType] = useState("Normal");

  async function fetchDataOptions(type) {
    const list = await PokemonService.getPokemons(type);
    setListPokemon(list);
  }
  console.log(listPokemon);

  useEffect(() => {
    fetchDataOptions(pokeType);
  }, [pokeType]);

  return (
    <>
      <>
        <Select pokeType={pokeType} setPokeType={setPokeType} options={Object.keys(TypePokemon)} />
        <div>
          {listPokemon.map(pokemon => {
            return <Card photo={pokemon.photo} name={pokemon.name} number={pokemon.number} />;
          })}
        </div>
      </>
    </>
  );
}

export default Home;
