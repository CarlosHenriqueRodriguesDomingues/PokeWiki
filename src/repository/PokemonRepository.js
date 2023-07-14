import axios from "../utils/AxiosInstance";

class PokemonRepository {
  async getPokemonsType(numberType) {
    const response = await axios.get(`/type/${numberType}`, {});
    if (!response) {
      return;
    }
    return response && response.data;
  }

  async getDescriptionPokemon(numberPokemon) {
    const response = await axios.get(`/pokemon/${numberPokemon}`, {});
    if (!response) {
      return;
    }
    return response && response.data;
  }
}

export default new PokemonRepository();
