const btnMatin = document.querySelector("#bouton-matin");
const btnMidi = document.querySelector("#bouton-midi");
const btnSoir = document.querySelector("#bouton-soir");
const btnNuit = document.querySelector("#bouton-nuit");
const boxMatin = document.querySelector("#img-matin");
const boxMidi = document.querySelector("#img-midi");
const boxSoir = document.querySelector("#img-soir");
const boxNuit = document.querySelector("#img-nuit");
const btn = document.querySelector(".bouton-jour")

btnMatin.addEventListener('click', (e) => {
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

btnMidi.addEventListener('click', (e) => {
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

btnSoir.addEventListener('click', (e) => {
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

btnNuit.addEventListener('click', (e) => {
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
