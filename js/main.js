"use strict";

//SELECTORS...
const buttonNumber = document.querySelector(".js-number-button");
const buttonReset = document.querySelector(".js-reset-button");
const input = document.querySelector(".js-user-number");
const hint = document.querySelector(".js-hint");
const attempsInfo = document.querySelector(".js-attemps");

//Initial info
let attemps = 0;
attempsInfo.innerHTML = "Número de intentos:" + attemps;

hint.innerHTML = "Pista: Escribe el número y dale a Prueba";

//Generator of random numbers
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es: ${randomNumber}`);


//FUNCTIONS

// counter
function countAttemps() {
  attemps += 1;
  attempsInfo.innerHTML = "Número de intentos:" + attemps;
}

// hint
function getHint() {
  const userNumber = parseInt(input.value);
  if (userNumber > 100 || userNumber < 1) {
    hint.innerHTML = "Pista: " + "El número debe estar entre 1 y 100";
  } else {
    if (userNumber === randomNumber) {
      hint.innerHTML = "Has ganado campeona!!!";
      hint.classList.add("winner");
      buttonNumber.setAttribute("disabled", "");
      buttonNumber.classList.add("btn-disabled");
      buttonReset.removeAttribute("disabled");
    } else if (userNumber < randomNumber) {
      hint.innerHTML = "Pista: " + "Demasiado bajo";
    } else {
      hint.innerHTML = "Pista: " + "Demasiado alto";
    }
  }
}

// resolve game
function resolveGame(ev) {
  ev.preventDefault();
  countAttemps();
  getHint();
}

// reset game
function resetGame() {
  location.reload();
  userNumber.value = "";
}


//LISTENERS
buttonNumber.addEventListener("click", resolveGame);
buttonReset.addEventListener("click", resetGame);
