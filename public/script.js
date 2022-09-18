document.querySelector("#btnLoad").addEventListener("click", () => {
  getDinoName();
  getDinoImage();
});

async function getDinoName() {
  const response = await fetch("./dinoname");
  const data = await response.json();
  let dinoName = data[0].join(" ");
  console.log(dinoName);
  document.querySelector("#dinoName").innerText = dinoName;
}

async function getDinoImage() {
  const response = await fetch("./dinoImage");
  const data = await response.json();
  let dinoImage =
    data.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl;

  if (document.querySelector("#dinoImage") !== null) {
    document.querySelector("#dinoImage").remove();
  }

  let img = document.createElement("img");
  img.id = "dinoImage";
  img.src = dinoImage;
  document.querySelector(".generator").appendChild(img);
}
