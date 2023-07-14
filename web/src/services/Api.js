const callToApi = (data) => {
  return fetch("https://localhost:4000/api/add", {
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

const getAllCardsApi = async () => {
  const fetchApi = await fetch("http://localhost:4000/api/allproject");
  const dataFetch = await fetchApi.json();
  return dataFetch;
};

// const getAllCardsApi = () => {
//   return fetch("http://localhost:4000/api/allproject")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
// };

const objToExport = {
  callToApi: callToApi,
  getAllCardsApi: getAllCardsApi,
};

export default objToExport;
