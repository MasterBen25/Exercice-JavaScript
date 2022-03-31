const btnMatin = document.querySelector("#bouton-matin");
const btnMidi = document.querySelector("#bouton-midi");
const btnSoir = document.querySelector("#bouton-soir");
const boxMatin = document.querySelector("#img-matin");
const boxMidi = document.querySelector("#img-midi");
const boxSoir = document.querySelector("#img-soir");
const btn = document.querySelector(".bouton-jour")

btnMatin.addEventListener('click', (e) => {
  btnMidi.classList.remove("bouton-active");
  boxMidi.classList.remove("visible");
  boxMidi.classList.add("none");
  boxMidi.classList.remove("block");
  boxMatin.classList.add("block");
  boxMatin.classList.add("visible");
  btnMatin.classList.add("bouton-active");
})

btnMidi.addEventListener('click', (e) => {
  btnMatin.classList.remove("bouton-active");
  boxMatin.classList.remove("visible");
  boxMatin.classList.add("none");
  boxMatin.classList.remove("block");
  boxMidi.classList.add("visible");
  boxMidi.classList.add("block");
  btnMidi.classList.add("bouton-active");
})
