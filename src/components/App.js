import { useState, useEffect } from "react";
import callToApi from "../services/Api.js";
import ls from '../services/localStorage.js';
import "../styles/App.scss";
import cover2 from "../images/cover_2.jpeg";
import logo from "../images/logo-adalab.png";
import Footer from '../components/Footer/Footer.js';
import Form from '../components/Form/Form.js';
import Header from '../components/Header/Header.js';
import Preview from './Preview/Preview.js';
import GetAvatar from "./GetAvatar/GetAvatar.js";

function App() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [createCard, setCreateCard] = useState("");
  const [data, setData] = useState(ls.get("formData") || {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    slogan: false,
    repo: false,
    demo: false,
    technologies: false,
    desc: false,
    autor: false,
    job: false,
  });

  const handleChangeForm = (parame1, value) =>{
    const clonedData = {...data,[parame1]:value};
    setData( clonedData);


  }


  const handleInput = (ev) => {
    const { id, value } = ev.target;  //desestructuración id y value
    setData((prevData) => ({   //función setData para actualizar los nuevos valores
      ...prevData,             //cre nuevo objeto para guardar lo que tenia data
      [id]: value,  //id: campo de entrada y value: valor del id
    }));
    setErrors((prevErrors) => ({    //funcion setErrors para actualizar los nuevos valores
      ...prevErrors,       // crea un nuevo objeto que tenia errors
      [id]: value === "",     //se guarda error si el valor del id está vacío
    }));
  };

  const handleClickCreateCard = (ev) => {

    ev.preventDefault();

    if (createCard === "") {
      setCreateCard("");
    }

    callToApi(data).then((data) => {
    if (data.success) {
      setSuccessMessage(true);
      setErrorMessage(false);
      setUrl(data.cardURL); 
    } else {
      setSuccessMessage(false);
      setErrorMessage(true);
      setUrl(data.cardURL); 
    }
    });
  };

  useEffect(() => {
    ls.set("formData", data);
  }, [data]);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Preview data={data} />
        <Form data={data} errors={errors} handleInput={handleInput}url={url} successMessage={successMessage} handleClickCreateCard={handleClickCreateCard} errorMessage={errorMessage} handleChangeForm = {handleChangeForm}/>
      </main>
    </div>
  );
}

export default App;

