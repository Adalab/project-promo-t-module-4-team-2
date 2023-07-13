const getAllCardsApi = () => {
  return fetch("http://localhost:4000/api/allproject")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.results;
    });
};
export default getAllCardsApi;
