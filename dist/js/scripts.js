const ALPHABET = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "!": "-.-.--",
  "@": ".--.-.",
  " ": "/",
};

//Reverse keys and values in object above
export const reverseObject = Object.assign(
  {},
  ...Object.entries(ALPHABET).map(([a, b]) => ({ [b]: a }))
);
reverseObject["/"] = " ";

console.log(reverseObject);

//Function to convert English to Morse Code
export const EngToMorse = (eng, ALPHABET) => {
  let engInput = eng.value;

  const letterArr = engInput.toLowerCase().split("");

  const translatedEng = letterArr.map((n) => {
    let m = Object.values(ALPHABET[`${n}`]).join("");
    return m;
  });

  const morseResult = translatedEng.join(" ");

  return morseResult;
};
//Function to convert Morse Code to English
export const MorseToEng = (morse, reverseObject) => {
  let morseInput = morse.value;

  const morseArr = morseInput.split(" "); // array of letters

  const translatedMorse = morseArr.map((n) => {
    // every letter is changed into
    let m = Object.values(reverseObject[`${n}`]).join(" ");
    return m;
  });

  const engResult = translatedMorse.join("");

  return engResult;
};

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
