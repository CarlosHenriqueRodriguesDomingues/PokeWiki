import { TypePokemon } from "../utils/EnumPokemon";
import PokemonRepository from "../repository/PokemonRepository";

class PokemonService {
  async getPokemons(type) {
    const listPokemon = [];
    const numberType = TypePokemon[type];

    const pokemons = await PokemonRepository.getPokemonsType(numberType);

    const retorno = pokemons.pokemon.map(pokemon => {
      return {
        name: pokemon.pokemon.name,
        url: pokemon.pokemon.url,
        number: pokemon.pokemon.url.split("/")[6]
      };
    });

    retorno.forEach(async pokemon => {
      const descriptionPokemon = await PokemonRepository.getDescriptionPokemon(pokemon.number);

      listPokemon.push({
        ...pokemon,
        photo: descriptionPokemon.sprites.other["dream_world"].front_default
      });
    });

    console.log(listPokemon);
    return listPokemon.slice(0, 10);
  }
}

export default new PokemonService();
