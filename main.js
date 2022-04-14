/* --------------------- Mode nuit ---------------------*/

const swNight = document.querySelector("#switch-night");

document.body.classList.add("color-txt-wh");

swNight.addEventListener("click", function(e) {
  switch (e.target.id) {
    case "img-switch":
      document.body.classList.toggle("color-txt-wh");
      document.body.classList.toggle("dark-bg");
      document.body.style.transition = "0.3s linear";
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
const btn = document.querySelectorAll(".bouton-jour");

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

/* ------------------ Pop Up Form --------------------- */

const open = document.querySelector("#open-form");
const answer = document.querySelector(".answer");
const form = document.querySelector("#formulaire-pop");
const send = document.querySelector("#send");
const cancel = document.querySelector("#cancel");
const inputPrenom = document.querySelector('input[name="input1"]');
const inputNom = document.querySelector('input[name="input2"]');
const inputAdresse = document.querySelector('input[name="input3"]');
const inputMail = document.querySelector('input[name="input4"]');
const boxRep = document.querySelector("#rep-form");

open.addEventListener('click', () => {
  form.classList.add("visible");
  answer.classList.remove("visible");
  inputPrenom.value = "";
  inputNom.value = "";
  inputAdresse.value = "";
  inputMail.value = "";
})

send.addEventListener("click", function() {
  form.classList.remove("visible");
  answer.classList.add("visible");
  boxRep.style.border = "3px solid #777";
  document.querySelector("#rep-form").innerHTML = `
      <h3>Récapitulatif</h3>
      <p>Prénom : ${inputPrenom.value}</p>
      <p>Nom : ${inputNom.value}</p>
      <p>Adresse : ${inputAdresse.value}</p>
      <p>E-mail : ${inputMail.value}</p>
    `;
})

cancel.addEventListener("click", function() {
  form.classList.remove("visible");
  document.querySelector("#rep-form").innerHTML = `
      <p></p>
    `;
})
