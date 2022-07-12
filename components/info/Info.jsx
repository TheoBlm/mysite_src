import React from "react";
import "./info.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Info = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div
      className="info__container"
      style={{ display: show ? "block" : "none" }}
    >
      <article className="info">
        <h3>
          Information {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <AiOutlineCloseCircle
            className="info-icon"
            onClick={() => setShow((s) => !s)}
          ></AiOutlineCloseCircle>
        </h3>
        <p>
          Le contenu de ce site évoluera au fur et à mesure. Il est donc
          possible que des liens ne soient pas renseigner ou que des infos ne
          soient pas à jour. Bonne visite
        </p>
        <h5>Dernière Mise à jour: Mai 2022 </h5>
      </article>
    </div>
  );
};

export default Info;
