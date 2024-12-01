let templates = document.querySelector(".templates");

let cards = [
  {
    id: 1,
    img: "./images/card1.png",
    url: "./card1.html",
  },
  {
    id: 2,
    img: "./images/card2.png",
    url: "./card2.html",
  },
  {
    id: 4,
    img: "./images/card4.png",
    url: "./card4.html",
  },
  {
    id: 5,
    img: "./images/card5.png",
    url: "./card5.html",
  },
];

cards.forEach((card) => {
  let div = document.createElement("div");
  div.classList.add("card");

  let img = document.createElement("img");
  img.src = card.img;
  img.alt = `Card ${card.id}`;

  img.addEventListener("click", () => {
    if (card.url) {
      window.location.href = card.url;
    } else {
      console.error(`No URL defined for card with id: ${card.id}`);
    }
  });

  div.appendChild(img);
  templates.appendChild(div);
});
