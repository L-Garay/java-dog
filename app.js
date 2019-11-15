let dogs = {
  lazer: {
    name: "Lazer",
    status: ["Normal", "Full", "Comfy", "Happy Boy"],
    statusIndex: 0,
    requirement: Math.floor(Math.random() * 12) + 1,
    img:
      "http://www.vitamin-ha.com/wp-content/uploads/2012/12/Funny-Pug-Dog-Lazer-Eyes.jpg",
    pets: 0,
    treats: 0
  },
  blazer: {
    name: "Blazer",
    status: ["Normal", "Full", "Comfy", "Happy Boy"],
    statusIndex: 0,
    requirement: Math.floor(Math.random() * 15) + 1,
    img:
      "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/KleinYan%201.jpg?itok=YuTZB8qv",
    pets: 0,
    treats: 0
  },
  peach: {
    name: "Peach",
    status: ["Normal", "Satisfied", "Relaxed", "Pleased Woman"],
    statusIndex: 0,
    requirement: Math.floor(Math.random() * 10) + 1,
    img: "http://cdn.akc.org/content/article-body-image/curly_tail_spitz.jpg",
    pets: 0,
    treats: 0
  },
  daisy: {
    name: "Daisy",
    status: ["Normal", "Satisfied", "Relaxed", "Pleased Woman"],
    statusIndex: 0,
    requirement: Math.floor(Math.random() * 19) + 1,
    img:
      "https://i.pinimg.com/originals/13/af/a4/13afa46a9c874704bdfb0f1c6ea9f747.png",
    pets: 0,
    treats: 0
  }
};
let activeDog = dogs.lazer;
let dogToReset;
let nameElem = document.querySelector("#dog-name");
let petsElem = document.querySelector("#dog-pets");
let treatsElem = document.querySelector("#dog-treats");
let statusElem = document.querySelector("#dog-status");
let imgElem = document.querySelector("#dog-pic");
let petBtn = document.querySelector("#pet-button");
let treatBtn = document.querySelector("#treat-button");

/**
 *
 * @param {string} dogName
 */
function setActiveDog(dogName) {
  activeDog = dogs[dogName];
  drawDog();
}
function pet() {
  activeDog.pets++;
  if (
    activeDog.pets > activeDog.requirement &&
    activeDog.treats > activeDog.requirement
  ) {
    activeDog.statusIndex = 3;
  } else if (activeDog.pets > activeDog.requirement) {
    activeDog.statusIndex = 2;
  } else {
    activeDog.statusIndex = 0;
  }
  drawDog();
}
function treat() {
  activeDog.treats++;
  if (
    activeDog.treats > activeDog.requirement &&
    activeDog.treats > activeDog.requirement
  ) {
    activeDog.statusIndex = 3;
  } else if (activeDog.treats > activeDog.requirement) {
    activeDog.statusIndex = 1;
  } else {
    activeDog.statusIndex = 0;
  }
  drawDog();
}
function pullTail() {
  dogToReset.pets = 0;
  dogToReset.treats = 0;
  dogToReset.statusIndex = 0;
  drawDog();
}

function drawDog() {
  nameElem.innerText = activeDog.name;
  petsElem.innerText = activeDog.pets;
  treatsElem.innerText = activeDog.treats;
  statusElem.innerText = activeDog.status[activeDog.statusIndex];
  imgElem.setAttribute("src", activeDog.img);
  if (activeDog.statusIndex > 2) {
    petBtn.setAttribute("disabled", "true");
    dogToReset = activeDog;
  } else {
    petBtn.removeAttribute("disabled");
  }
  if (activeDog.statusIndex > 1) {
    treatBtn.setAttribute("disabled", "true");
    dogToReset = activeDog;
  } else {
    treatBtn.removeAttribute("disabled");
  }
}
