import { reverseObject } from "./scripts";

//Array that contains all letters of ENG alphabet and Numbers
const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  " ",
];

//Array that contains Morse code characters that correlate 1-1 with array above
const MORSE = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
  "-----",
  "/",
];

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

// const convertToMorse = (inputEng, ALPHABET) => {
//   let engInput = inputEng.value;
//   const textArr = engInput.toLowerCase().split(" "); //Turning string into array of substrings with 1 space between
//   const translatedEng = textArr.map((n) => {
//     let m = Object.values(ALPHABET[`${n}`]).join("");
//     return m;
//   });
//   const finalMorse = translatedEng.join(" ");
//   // let decodeMorse = morseToEng(".-- --- .-. -..   .-- --- .-. -..");
//   return finalMorse;
// };

// const convertToEng = (inputMorse, MORSE) => {
//   let morseInput = inputMorse.value;
//   const morseArr = morseInput.split(" "); //Turning string into array of substrings with 1 space between
//   const translatedMorse = morseArr.map((n) => {
//     let m = Object.values(MORSE[`${n}`]).join(" ");
//     return m;
//   });
//   const finalEng = translatedMorse.join("");
//   // let decodeMorse = morseToEng(".-- --- .-. -..   .-- --- .-. -..");
//   return finalEng;
// };

//Function to decode Morse into English
const morseToEng = (morseChar) => {
  if (typeof morseChar !== "string") {
    throw new Error("Invalid input");
  }
  const engWord = morseChar
    .split(" ")
    .map((char) => reverseObject(char))
    .join(" ");
  return engWord;
};
console.log(morseToEng);

// const morseToEng = (value) => {
//   return value
//     .split("") //Split string into array of substrings
//     .map((MORSE) =>
//       MORSE
//         // .split(" ") //character code 1 space apart
//         // .map((char) => ALPHABET[char])
//         .join("")
//     )
//     .join(" / ") // adding spaces between words
//     .trim(); //Removes the leading and trailing white space and line terminator characters from a string.
// };
// console.log(morseToEng(".... . -.--   .--- ..- -.. ."));

//Function to translate English letter > Morse character & Morse character > English letter
//'char' is letter of alphabet, 'to' and 'from' represent languages I'm translating to and from
const convertChar = (char, from, to) => {
  let index = from.indexOf(char);
  if (index > 0) {
    return to[index];
  }
  return convertChar();
};

const MORSE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": 1,
  "..---": 2,
  "...--": 3,
  "....-": 4,
  ".....": 5,
  "-....": 6,
  "--...": 7,
  "---..": 8,
  "----.": 9,
  "-----": 0,
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": '"',
  "...-..-": "$",
  "-.-.--": "!",
  ".--.-.": "@",
  "/": " ",
};
