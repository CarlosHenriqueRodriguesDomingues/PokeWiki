import React from "react";
import "./Card.css";

function Card({ photo, name, number, color }) {
  return (
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
            backgroundColor: "#696969"
          }}
        ></div>
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
