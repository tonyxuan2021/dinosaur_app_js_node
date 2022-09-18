const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/dinoname", async (request, response) => {
  const fetchApi = await fetch(
    "https://dinoipsum.com/api/?format=json&words=2&paragraphs=1"
  );
  const dinoNameResponse = await fetchApi.json();
  // console.log(dinoNameResponse);
  response.json(dinoNameResponse);
});

app.get("/dinoImage", async (request, response) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f95dacf387msh6f0d149205e4e5ap1fd2a5jsn211e1f8ce304",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };
  const fetchApi = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10",
    options
  );
  const dinoImageResponse = await fetchApi.json();
  console.log(dinoImageResponse);
  response.json(dinoImageResponse);
});
