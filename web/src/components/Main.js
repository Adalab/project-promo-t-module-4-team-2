import Preview from "./Preview/Preview.js";
import Form from "../components/Form/Form.js";

function Main({
  data,
  errors,
  handleInput,
  url,
  successMessage,
  handleClickCreateCard,
  errorMessage,
  handleChangeForm,
  showUrlButton,
}) {
  return (
    <main className="main">
      <Preview data={data} />
      <Form
        data={data}
        errors={errors}
        handleInput={handleInput}
        url={url}
        successMessage={successMessage}
        handleClickCreateCard={handleClickCreateCard}
        errorMessage={errorMessage}
        handleChangeForm={handleChangeForm}
      />
      {showUrlButton && (
        <a href={url} target="_blank" rel="noreferrer">
          <button>Ver tarjeta</button>
        </a>
      )}
    </main>
  );
}

export default Main;
