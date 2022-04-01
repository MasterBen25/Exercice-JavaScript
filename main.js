/* --------------------- Mode nuit ---------------------*/

const swNight = document.querySelector("#switch-night");

document.body.classList.add("color-txt-wh");

swNight.addEventListener("click", function(e) {
  switch (e.target.id) {
    case "img-switch":
      document.body.classList.toggle("color-txt-wh");
      document.body.classList.toggle("dark-bg");
      break;
    default:
      null;
  }
})


/* --------------------- Cycle journée ---------------------*/

const btnMatin = document.querySelector("#bouton-matin");
const btnMidi = document.querySelector("#bouton-midi");
const btnSoir = document.querySelector("#bouton-soir");
const btnNuit = document.querySelector("#bouton-nuit");
const boxMatin = document.querySelector("#img-matin");
const boxMidi = document.querySelector("#img-midi");
const boxSoir = document.querySelector("#img-soir");
const boxNuit = document.querySelector("#img-nuit");
const btn = document.querySelectorAll(".bouton-jour")

btnMatin.addEventListener('click', () => {
  btnMidi.classList.remove("bouton-active");
  btnSoir.classList.remove("bouton-active");
  btnNuit.classList.remove("bouton-active");
  boxMidi.classList.remove("visible", "block");
  boxSoir.classList.remove("visible", "block");
  boxNuit.classList.remove("visible", "block");
  boxMidi.classList.add("none");
  boxSoir.classList.add("none");
  boxNuit.classList.add("none");
  boxMatin.classList.add("block", "visible");
  btnMatin.classList.add("bouton-active");
})

btnMidi.addEventListener('click', () => {
  btnMatin.classList.remove("bouton-active");
  btnSoir.classList.remove("bouton-active");
  btnNuit.classList.remove("bouton-active");
  boxMatin.classList.remove("visible", "block");
  boxSoir.classList.remove("visible", "block");
  boxNuit.classList.remove("visible", "block");
  boxMatin.classList.add("none");
  boxSoir.classList.add("none");
  boxNuit.classList.add("none");
  boxMidi.classList.add("block", "visible");
  btnMidi.classList.add("bouton-active");
})

btnSoir.addEventListener('click', () => {
  btnMatin.classList.remove("bouton-active");
  btnMidi.classList.remove("bouton-active");
  btnNuit.classList.remove("bouton-active");
  boxMatin.classList.remove("visible", "block");
  boxMidi.classList.remove("visible", "block");
  boxNuit.classList.remove("visible", "block");
  boxMatin.classList.add("none");
  boxMidi.classList.add("none");
  boxNuit.classList.add("none");
  boxSoir.classList.add("block", "visible");
  btnSoir.classList.add("bouton-active");
})

btnNuit.addEventListener('click', () => {
  btnMatin.classList.remove("bouton-active");
  btnMidi.classList.remove("bouton-active");
  btnSoir.classList.remove("bouton-active");
  boxMatin.classList.remove("visible", "block");
  boxMidi.classList.remove("visible", "block");
  boxSoir.classList.remove("visible", "block");
  boxMatin.classList.add("none");
  boxMidi.classList.add("none");
  boxSoir.classList.add("none");
  boxNuit.classList.add("block", "visible");
  btnNuit.classList.add("bouton-active");
})
