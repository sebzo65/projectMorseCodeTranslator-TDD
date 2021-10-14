import {
  ALPHABET,
  reverseObject,
  EngToMorse,
  MorseToEng,
} from "./functions.js";

//Call DOM for input
const buttonEngToMorse = document.querySelector(".form__button--EngToMorse");
const buttonMorseToEng = document.querySelector(".form__button--MorseToEng");
const formOutput = document.querySelector(".form__output");
const inputEng = document.querySelector(".form__input--Eng");
const inputMorse = document.querySelector(".form__input--Morse");

//When clicking Eng to Morse button
buttonEngToMorse.addEventListener("click", (event) => {
  formOutput.value = EngToMorse(inputEng, ALPHABET);
});

//When clicking Morse to Eng button
buttonMorseToEng.addEventListener("click", (event) => {
  formOutput.value = MorseToEng(inputMorse, reverseObject);
});

//Clear Button
clearButton = document.querySelector(".form__button");
clearButton.addEventListener("click", () => {
  inputEng.value = null;
  inputMorse.value = null;
  formOutput.value = null;
});
