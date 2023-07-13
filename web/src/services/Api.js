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

export default callToApi;
