const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");
const child = document.querySelectorAll(".child");
const divs = document.querySelectorAll(".card");
const paraf = document.querySelectorAll(".paraf")
const background = document.querySelector(".background")

toggle.addEventListener("change", function (e) {
  if (this.checked) {
    body.classList.add("dark");
    background.classList.remove("background");
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.add("card-dark");
    }
    for (var i = 0; i < child.length; i++) {
      child[i].classList.add("card-dark");
    }
    for (var i = 0; i < paraf.length; i++) {
        paraf[i].classList.add('paraf-dark');
    }
  } else {
    body.classList.remove("dark");
    background.classList.add("background");
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.remove("card-dark");
    }
    for (var i = 0; i < child.length; i++) {
      child[i].classList.remove("card-dark");
    }
    for (var i = 0; i < paraf.length; i++) {
        paraf[i].classList.remove('paraf-dark');
    }
  }
});

















