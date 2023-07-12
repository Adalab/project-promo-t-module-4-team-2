import cover from "../../images/vibes-logo.jpg";
import user from "../../images/urkel.jpg";
import "../../styles/App.scss";

const Preview = ({ data }) => {
  return (
    <section className="preview">
      <img className="image" src={data.image || cover} alt="" />

      <section className="autor">
        <section className="info-project">
          <p className="subtitle">{data.repo || "Repositorio"}</p>
          <hr className="line" />

          <h2 className="title">{data.name || "Todo sobre Laura Winslow"}</h2>
          <p className="slogan">{data.slogan || "¿He sido yo?"}</p>
          <p className="desc">{data.desc || "Proyecto sobre la bella Laura"}</p>
          <section className="technologies">
            <p className="text">
              {data.technologies || "56k de cobre vía módem"}
            </p>
            <p className="text">{data.demo || "Visual Basic"}</p>
          </section>
        </section>

        <section className="info-autor">
          <img className="image" src={data.photo || user} alt="" />
          <p className="job">{data.job || "Inventor"}</p>
          <p className="name">{data.autor || "Steve Urkel"}</p>
        </section>
      </section>
    </section>
  );
};
export default Preview;
