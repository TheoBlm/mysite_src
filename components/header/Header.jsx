import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Théo Bloume</h1>
        <h5 className="text-light">Etudiant en Informatique</h5>

        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
          <h5>Cette image est temporaire</h5>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
