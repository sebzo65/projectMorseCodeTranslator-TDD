//Object that maps all morse characters to Roman letters & common symbols
const MORSE = {
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
};

//Disable morse code for these characters
// ".": ".-.-.-",
// ",": "--..--",
// "?": "..--..",
// "'": ".----.",
// "/": "-..-.",
// "(": "-.--.",
// ")": "-.--.-",
// "&": ".-...",
// ":": "---...",
// ";": "-.-.-.",
// "=": "-...-",
// "+": ".-.-.",
// "-": "-....-",
// _: "..--.-",
// '"': ".-..-.",
// $: "...-..-",
// "!": "-.-.--",
// "@": ".--.-.",
// " ": "/",

//Function to reverse key/value pairs
let reverseMorse = Object.assign(
  {},
  ...Object.entries(MORSE).map(([a, b]) => ({ [b]: a }))
);
console.log(reverseMorse);

//Function to decode morse code into English text
const decodeMorse = (morseCode) => {
  return morseCode
    .split("   ") //Get word 3 spaces apart
    .map((word) =>
      word
        .split(" ") //get character code 1 space apart
        .map((character) => reverseMorse[character]) //decode Morse
        .join("")
    )
    .join(" ") //Add spaces between words
    .trim();
};
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

//Call DOM for inputs
const formInput = document.querySelector(".form__input");
const formButton = document.querySelector(".form__button");
const formOutput = document.querySelector(".form__output");

formButton.addEventListener("click", (e) => {
  let translateInput = formInput.innerHTML;
  if (translateInput.includes("." && "-")) {
    formOutput.value = decodeMorse(translateInput);
  }
});

//Function to decode English text into Morse Code
const decodeEnglish = (text) => {
  return text
    .split(" / ") //Separate morse words with "/"
    .map((word) =>
      word
        .split(" ") //get morse character 1 space apart
        .map((character) => MORSE[character]) //decode Morse
        .join("")
    )
    .join(" ") //Add spaces between words
    .trim();
};
console.log(decodeEnglish("judy"));

//Function to check whether first letter in input box is a roman letter
//or a morse code character

//Function to check that spacing between morse groups are either 3 or
//7 characters long
