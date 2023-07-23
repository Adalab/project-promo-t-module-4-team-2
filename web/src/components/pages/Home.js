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
  console.log(archivedProjects);
  const renderList = () => {
    return archivedProjects.map((project) => (
      <section className="authorSection">
        <section className="authorSection__project">
          <p className="authorSection__project--subtitle">{project.repo}</p>
          <hr className="line" />

          <h2 className="authorSection__project--title">{project.name}</h2>
          <p className="authorSection__project--slogan">{project.slogan}</p>
          <p className="authorSection__project--desc">{project.desc}</p>
          <section className="authorSection__project--technologies">
            <p className="authorSection__project--text">{project.technologies}</p>
            <p className="authorSection__project--text">{project.demo}</p>
          </section>
        </section>

        <section className="authorSection__project--name">
          <img className="authorSection__project--image" src={project.photo || user} alt="" />
          <p className="authorSection__project--job">{project.job}</p>
          <p className="authorSection__project--jobName">{project.autor}</p>
        </section>
      </section>
    ));
  };
  return (
    <div className="home">
      <section className="welcome-container">
        <h1 className="home__title team-name">The 90's developers</h1>
        <h1 className="home__title">¿Te apetece conocer nuestros proyectos?</h1>
        <p className="home__text">¡Estás en la web correcta!</p>
        <Link className="home__button--link" to="/main">
          <button className="home__button">Bienvenidxs</button>
        </Link>
      </section>
      <section className="card-list">{renderList()}</section>
    </div>
  );
}
export default Home;
