const callToApi = (data) => {
  return fetch("http://localhost:4000/api/add", {
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

export default callToApi;
