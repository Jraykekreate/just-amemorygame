let container = document.querySelector(".container");
let selectedTiles = [];
let selectedTileIds = [];
let score = document.querySelector(".score");
score.innerText = "12 more to go";
let i = 0;
let cardArray = [
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
];
cardArray.sort(() => Math.random() - 0.5);

function createTiles() {
  let tile, img;
  let id = 0;
  cardArray.forEach((card) => {
    tile = document.createElement("div");
    img = document.createElement("img");
    tile.setAttribute("id", id);
    tile.setAttribute("data-open", false);
    tile.setAttribute("data-name", card.name);
    img.setAttribute("src", "images/blank.png");
    tile.appendChild(img);
    container.appendChild(tile);
    tile.addEventListener("click", flipCard);

    id++;
  });
}
createTiles();
function flipCard(e) {
  const selectedCardName = e.target.parentElement;
  selectedCardName.dataset.open = true;
  let image = e.target;
  let picId = image.parentElement.getAttribute("id");

  image.setAttribute("src", cardArray[picId].img);
  selectedTiles.push(selectedCardName);
  selectedTileIds.push(picId);
  console.log(selectedTiles);
  if (container.firstChild === "#text") {
    score.innerText = "you win";
  }
  if (selectedTiles.length < 2 && selectedTileIds.length < 2) {
    console.log("wait");
  }
  if (selectedTileIds[0] === selectedTileIds[1]) {
    console.log("salks");
    console.log(selectedTiles[0].firstChild);
    selectedTiles[0].firstChild.setAttribute("src", "images/blank.png");
    selectedTileIds = [];
    selectedTiles = [];
  }
  if (
    selectedTiles.length === 2 &&
    selectedTileIds.length === 2 &&
    selectedTileIds[0] !== selectedTileIds[1]
  ) {
    console.log(selectedTiles[0].dataset.name, selectedTiles[1].dataset.name);
    console.log(selectedTileIds);
    confirmTiles();
    console.log(container.firstChild);
  }
}

function confirmTiles() {
  if (selectedTiles[0].dataset.name === selectedTiles[1].dataset.name) {
    selectedTiles[0].firstChild.setAttribute("src", "images/white.png");
    selectedTiles[1].firstChild.setAttribute("src", "images/white.png");
    scoreIt();
    setTimeout(() => {
      selectedTiles.forEach((tile) => {
        tile.removeEventListener("click", flipCard);
        tile.remove();

        selectedTiles = [];
        selectedTileIds = [];
        console.log(selectedTileIds);
      });
    }, 500);
  } else {
    setTimeout(() => {
      selectedTiles[0].firstChild.setAttribute("src", "images/blank.png");
      selectedTiles[1].firstChild.setAttribute("src", "images/blank.png");
      selectedTiles = [];
      selectedTileIds = [];
    }, 1000);
    console.log("sks");
  }
}

function scoreIt() {
  i += 2;
  score.innerText = `${cardArray.length - i} more to go`;
}
