import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Pokedex",
    github: "https://github.com/TheoBlm/pokedexVue",
    demo: "https://theoblm.github.io/pokedex",
  },
  {
    id: 2,
    image: IMG4,
    title: "EmployeeManager",
    github: "https://github.com/TheoBlm/employeemanager_src",
    demo: "https://theoblm.github.io/book",
  },
  {
    id: 3,
    image: IMG2,
    title: "This.website",
    github: "https://github.com/TheoBlm/mysite_src",
    demo: null,
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "A venir",
  //   github: "https://github.com",
  //   demo: "#",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "A venir",
  //   github: "https://github.com",
  //   demo: "#",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "A venir",
  //   github: "https://github.com",
  //   demo: "#",
  // },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes derniers projets</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
