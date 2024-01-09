const toTop = document.querySelectorAll(".to-top");
toTop.forEach((e) => {
  e.addEventListener("click", () =>
    window.scroll({ behavior: "smooth", top: 0 })
  );
});

const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

let tools = [
  "html5",
  "css3",
  "bootstrap",
  "javascript",
  "php",
  "codeigniter",
  "laravel",
  "mysql",
  "github",
  "gitbash",
  "vscode",
  "photoshop",
  "illustrator",
];

let bagianTools = document.querySelector(".tools");
let delay = 0;

let isiTools = `${tools
  .map(
    (e) =>
      `<div class="col-4 col-md-3 col-lg-2 m-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 50)}">
        <img src="assets/img/logo/${e}.png" alt="${e}" class="img-fluid">
      </div>`
  )
  .join("")}`;

bagianTools.innerHTML = isiTools;

let project = document.querySelector(".project");
let myProject = [
  {
    title: "Kontemplato",
    // github: "https://kontemplato.refuzionc0de.my.id/",
    url: "https://kontemplato.refuzionc0de.my.id/",
    img: "kontemplato",
  },
  {
    title: "Wedding Invitation",
    github: "https://github.com/anasfaisalamri/wedding-inv",
    url: "https://anasfaisalamri.github.io/wedding-inv",
    img: "wedding",
  },
];

let isiProject = `${myProject
  .map(
    (e) =>
      `<div class="col-md-6 col-lg-4 mb-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 50)}">
        <div class="card">
          <img class="card-img-top" ${
            e.img ? "src='assets/img/" + e.img + ".jpg'" : ""
          }>
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            ${
              e.github
                ? "<a href=" +
                  e.github +
                  "target='_blank' class='btn btn-primary'>Github</a>"
                : ""
            }
            <a href="${e.url}" target="_blank" class="btn btn-primary">Open</a>
          </div>
        </div>
      </div>`
  )
  .join("")}`;

project.innerHTML = isiProject;

let logoDesigns = [
  "gorillaz",
  "cyborgguppy",
  "luwakmotobike",
  "kingfarmer",
  "homesteak",
  "seafoodjulid",
  "buttalewangang",
  "kazmy",
  "butetjayatas",
];

let logoSrc = [];

logoDesigns.forEach((value, index) => {
  logoSrc.push(`assets/img/thumb/${value}.jpg`);
});

logoSrc.forEach((item) => {
  let carouselItem = document.createElement("div");
  carouselItem.setAttribute("class", "carousel-item");

  let colEl = document.createElement("div");
  colEl.setAttribute("class", "col-md-3");

  let card = document.createElement("div");
  card.setAttribute("class", "card border-0 me-2");

  let cardImg = document.createElement("div");
  cardImg.setAttribute("class", "card-img");

  let anchor = document.createElement("a");
  anchor.setAttribute("href", item);
  anchor.setAttribute("data-toggle", "lightbox");
  anchor.setAttribute("data-gallery", "logo-design");

  let img = document.createElement("img");
  img.setAttribute("src", item);
  img.setAttribute("class", "card-img");

  anchor.appendChild(img);
  cardImg.appendChild(anchor);
  card.appendChild(cardImg);
  colEl.appendChild(card);
  carouselItem.appendChild(colEl);

  let logoDesignEl = document.querySelector(".logo-design");
  logoDesignEl.appendChild(carouselItem);
});

let items = document.querySelectorAll(".carousel .carousel-item");
items[0].setAttribute("class", "carousel-item active");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

let templateLogoDesigns = [
  "ayamgeprek",
  "ayam",
  "bakso",
  "burger",
  "jus",
  "boba",
  "skincare",
];

let templateLogoSrc = [];

templateLogoDesigns.forEach((value, index) => {
  templateLogoSrc.push(`assets/img/template/${value}.jpg`);
});

templateLogoSrc.forEach((item) => {
  let carouselItem = document.createElement("div");
  carouselItem.setAttribute("class", "carousel-item template");

  let colEl = document.createElement("div");
  colEl.setAttribute("class", "col-md-3");

  let card = document.createElement("div");
  card.setAttribute("class", "card border-0 me-2");

  let cardImg = document.createElement("div");
  cardImg.setAttribute("class", "card-img");

  let anchor = document.createElement("a");
  anchor.setAttribute("href", item);
  anchor.setAttribute("data-toggle", "lightbox");
  anchor.setAttribute("data-gallery", "template-design");

  let img = document.createElement("img");
  img.setAttribute("src", item);
  img.setAttribute("class", "card-img");

  anchor.appendChild(img);
  cardImg.appendChild(anchor);
  card.appendChild(cardImg);
  colEl.appendChild(card);
  carouselItem.appendChild(colEl);

  let logoDesignEl = document.querySelector(".template-design");
  logoDesignEl.appendChild(carouselItem);
});

let itemsTemplate = document.querySelectorAll(
  ".carousel .template-design .template"
);
itemsTemplate[0].setAttribute("class", "carousel-item template active");

itemsTemplate.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsTemplate[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

let contacts = [
  {
    logo: "github",
    url: "https://github.com/anasfaisalamri",
  },
  {
    logo: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=085161552498",
  },
  {
    logo: "instagram",
    url: "https://instagram.com/anasfaisalamri",
  },
];

let bagianContact = document.querySelector(".contacts");

let isiContact = `${contacts
  .map(
    (contact) =>
      `<div class="col-sm-3 col-md-3 m-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 20)}">
        <a href="${contact.url}" target="_blank" rel="noopener noreferrer">
          <img src="assets/img/logo/${contact.logo}.png" alt="${contact.logo}">
        </a>
      </div>`
  )
  .join("")}`;

bagianContact.innerHTML = isiContact;
