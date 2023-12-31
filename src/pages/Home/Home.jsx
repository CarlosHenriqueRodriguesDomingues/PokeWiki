import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import PokemonService from "../../services/PokemonService";
import Select from "../../components/Select/Select";
import { TypePokemon } from "../../utils/EnumPokemon";

function Home() {
  const [listPokemon, setListPokemon] = useState([]);
  const [pokeType, setPokeType] = useState("Normal");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    setPokeType(event.target.value);
  };

  const fetchData = async pokeType => {
    setIsLoading(true);
    const newList = await PokemonService.getPokemons(pokeType);
    setListPokemon(newList);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData(pokeType);
  }, [pokeType]);

  return (
    <>
      <Select pokeType={pokeType} handleChange={handleChange} options={Object.keys(TypePokemon)} />
      <div className="ContainerCards">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          listPokemon.length > 0 &&
          listPokemon.map((pokemon, index) => {
            return (
              <Card
                photo={pokemon.photo}
                name={pokemon.name}
                number={pokemon.number}
                key={index + pokemon.name}
                pokeType={pokeType}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default Home;
