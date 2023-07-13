import React from "react";
import "./Header.css";
import pokeball from "../../assets/pokeball.svg";
import { Link } from "react-router-dom";
import github from "../../assets/github.svg";
function Header() {
  return (
    <header className="HeaderGlobal">
      <div className="ConteinerHeader">
        <div className="ConteinerLogo">
          <img src={pokeball} alt="Pokeball" width="37px" />
          <Link to="/" className="PokeWiki">
            PokeWiki
          </Link>
        </div>

        <Link to="/contato" className="Links">
          Contato
        </Link>

        <Link to="/sobre" className="Links">
          Sobre
        </Link>
      </div>
      <div className="github">
        <img src={github} alt="github" width="35px"></img>
        <a href="https://github.com/" className="LinkGitHub">
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
