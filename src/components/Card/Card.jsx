import React from "react";
import "./Card.css";

function Card({ photo, name, number }) {
  return (
    <div className="CardStyle">
      <div className="imagem">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg"
          alt="pokemon"
          className="PokemonImage"
        />
      </div>
    </div>
  );
}

export default Card;
