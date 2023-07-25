import React from "react";
import "./Card.css";
import { TypePokemon } from "../../utils/EnumPokemon";

function Card({ photo, name, number, pokeType }) {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div className="CardStyle">
        <div
          style={{
            display: "flex",
            width: "141px",
            height: "130px",
            position: "relative",
            zIndex: 2,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "23px"
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              position: "absolute",
              zIndex: -1,
              content: "",
              width: "141px",
              height: "130px",
              backgroundColor: TypePokemon[pokeType].color
            }}
          />
          <img src={photo} alt="pokemon" className="PokemonImage" />
        </div>
        <div className="ConteinerDescription">
          <span className="idpoke">#{number}</span>
          <span className="namepoke">{name}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
