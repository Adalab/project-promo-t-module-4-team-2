import cover from "../../images/cover.jpeg";
import user from "../../images/user.jpeg";

const Preview = ({data}) => {

    return (
        <section className="preview">
            <img className="image" src={data.image || cover} alt="" />

            <section className="autor">
                <section className="info-project">
                    <p className="subtitle">{data.repo || "Repo"}</p>
                    <hr className="line" />

                    <h2 className="title">{data.name || "Nombre del proyecto"}</h2>
                    <p className="slogan">{data.slogan || "Slogan"}</p>
                    <p className="desc">{data.desc}</p>
                    <section className="technologies">
                        <p className="text">{data.technologies || "Tecnologias"}</p>
                        <p className="text">{data.demo || "Demo"}</p>
                    </section>
                </section>

                <section className="info-autor">
                    <img className="image" src={data.photo || user} alt="" />

                    <p className="job">{data.job || "Trabajo"}</p>
                    <p className="name">{data.autor || "Nombre"}</p>
                </section>
            </section>
        </section>
    );
};
export default Preview;