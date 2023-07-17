import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import cover from "../../images/vibes-logo.jpg";
import user from "../../images/urkel.jpg";

function Home() {
  const [archivedProjects, setArchivedProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/allproject")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArchivedProjects(data);
      });
  }, []);

  const renderList = () => {
    return archivedProjects.map((project) => (
      <section className="autor-project">
        <section className="info-project">
          <p className="subtitle">{project.repo}</p>
          <hr className="line" />

          <h2 className="title">{project.name}</h2>
          <p className="slogan">{project.slogan}</p>
          <p className="desc">{project.desc}</p>
          <section className="technologies">
            <p className="text">{project.technologies}</p>
            <p className="text">{project.demo}</p>
          </section>
        </section>

        <section className="info-autor">
          <img className="image" src={project.image || user} alt="" />
          <p className="job">{project.job}</p>
          <p className="name">{project.autor}</p>
        </section>
      </section>
    ));
  };
  return (
    <div className="home">
      <h1 className="home__title team-name">The 90's developers</h1>
      <h1 className="home__title">¿Te apetece conocer nuestros proyectos?</h1>
      <p className="home__text">¡Estás en la web correcta!</p>
      <Link className="home__button--link" to="/main">
        <button className="home__button">Bienvenidxs</button>
      </Link>
      <section className="card-list">{renderList()}</section>
    </div>
  );
}
export default Home;
