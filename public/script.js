document.querySelector("#btnLoad").addEventListener("click", () => {
  getDinoName();
  getDinoImage();
});

async function getDinoName() {
  const response = await fetch("./dinoname");
  const data = await response.json();
  let dinoName = data[0].join(" ");
  console.log(dinoName);
}

async function getDinoImage() {
  const response = await fetch("./dinoImage");
  const data = await response.json();
  let donoImage = data.value[0].thumbnailUrl;
  console.log(donoImage);
}
