import { TypePokemon } from "../utils/EnumPokemon";
import PokemonRepository from "../repository/PokemonRepository";

class PokemonService {
  async getPokemons(type) {
    const listPokemon = [];
    const numberType = TypePokemon[type];

    const pokemons = await PokemonRepository.getPokemonsType(numberType);

    const retorno = pokemons.pokemon
      .map(pokemon => {
        return {
          name: pokemon.pokemon.name,
          url: pokemon.pokemon.url,
          number: pokemon.pokemon.url.split("/")[6]
        };
      })
      .slice(0, 30);

    await retorno.forEach(async pokemon => {
      const descriptionPokemon = await PokemonRepository.getDescriptionPokemon(pokemon.number);

      listPokemon.push({
        ...pokemon,
        photo: descriptionPokemon.sprites.other["dream_world"].front_default
      });
    });

    return listPokemon;
  }
}

export default new PokemonService();
