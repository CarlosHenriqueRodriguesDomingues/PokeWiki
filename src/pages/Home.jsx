import React from "react";
import Card from "../components/Card";

function Home() {
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
