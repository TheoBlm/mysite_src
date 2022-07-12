import React from "react";
import "./about.css";
import LOGO from "../../assets/logo.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiLibrary } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Faisons connaissance</h5>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={LOGO} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Diplôme</h5>
              <small>DUT Informatique</small>
            </article>
            <article className="about__card">
              <BiLibrary class="about__icon" />
              <h5>Experience</h5>
              <small>2+ ans d'expériences</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>10+ Projets réalisés</small>
            </article>
          </div>
          <p>
            <span className="text-highlight">
              Je suis actuellement en DUT2 Informatique
            </span>
            , en stage de fin d'études.
            <br></br>
            Durant ce cursus j'ai pu réaliser plusieurs projets Informatique
            dans divers langages
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#"> (voir CV)</a>, cependant mon intérêt penche vers le
            <span className="text-highlight"> Web </span>
            et je compte poursuivre dans ce domaine. D'une part, puisque que
            j'aime consacrer un certain temps sur{" "}
            <span className="text-highlight">l'aspect visuel </span>et{" "}
            <span className="text-highlight">l'ergonomie d'un site.</span>{" "}
            D'autre part puisque j'apprécie les technologies du Web et leur
            diversité. J'explore en ce moment à la fois le côté Front-end et le
            Back-end. <br />{" "}
            <span className="text-highlight">
              J'ai pour objectif de m'orienter vers du développement FullStack.
            </span>
          </p>
          <a href="#contact" className="btn btn-primary">
            Discutons
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
