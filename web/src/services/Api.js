const callToApi = (data) => {
  return fetch("https://dev.adalab.es/api/projectCard", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const getAllCardsApi = () => {
  return fetch("http://localhost:4000/api/allproject")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.results;
    });
};

const objToExport = { callToApi, getAllCardsApi };

export default objToExport;