const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


// Prelevo dalla pagina elemento contenitore delle immagini
const carouselImagesElem = document.querySelector(".my-carousel-images");
console.log(carouselImagesElem);

// Inserisco dinamicamente le immagini all'interno dell'elemento
images.forEach((curImg) => {
  carouselImagesElem.innerHTML += `
  <div class="my-carousel-item">
    <img
      class="img-fluid"
      src="${curImg.image}"
    />
    <div class="item-description px-3">
      <h2>${curImg.title}</h2>
      <p>${curImg.text}</p>
    </div>
  </div>
  `;
});

// Prelevo dalla pagina gli elementi prev e next
const nextBtnElem = document.querySelector(".my-next");
const prevBtnElem = document.querySelector(".my-previous");
console.log(nextBtnElem, prevBtnElem);

// Dichiaro variabile per le immagini attive
let imgActive = 0;

// Prelevo dalla pagina tutti gli elementi immagini tramite querySelectorAll e li salvo in una variabile (nodeList)
const imgListElem = document.querySelectorAll(".my-carousel-item");
console.log(imgListElem);

// Aggiungo active solo alla prima immagine
imgListElem[imgActive].classList.add("active");

// Al click del bottone next
nextBtnElem.addEventListener("click", next);

function next () {
  // Rimuovo classe active dall'immagine
  imgListElem[imgActive].classList.remove("active");

  // Condizione per incremento di imgActive
  imgActive = (imgActive < imgListElem.length - 1) ? imgActive + 1 : 0;

  // Aggiungo active
  imgListElem[imgActive].classList.add("active");
};