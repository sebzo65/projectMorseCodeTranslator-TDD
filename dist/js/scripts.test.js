import { expect } from "@jest/globals";
import { describe } from "yargs";

import {
  reverseObject,
  EngToMorse,
  MorseToEng,
  ALPHABET,
} from "./functions.js";

//For the testing, write 1 describe block per function

//Error messages
const invalidInputError = new Error("This is an invalid input");
const noTranslationAvailableError = new Error(
  "This character does not have a reference and cannot be translated"
);

//Check for both valid and invalid characters
describe("EngToMorse & MorseToEng functions", () => {
  test("For characters with no reference", () => {
    expect(() => EngToMorse("`", ALPHABET)).toThrowError(
      noTranslationAvailableError
    );
    expect(() => MorseToEng("`", ALPHABET)).toThrowError(
      noTranslationAvailableError
    );
    expect(() => EngToMorse("&", ALPHABET)).toThrowError(
      noTranslationAvailableError
    );
    expect(() => MorseToEng("&", ALPHABET)).toThrowError(
      noTranslationAvailableError
    );
    expect(() => EngToMorse("*", ALPHABET)).toThrowError(
      noTranslationAvailableError
    );
    expect(() => MorseToEng("*", ALPHABET)).toThrowError(
      noTranslationAvailableError
    );
  });

  test("For valid characters that do have a reference", () => {
    expect(MorseToEng("...", ALPHABET)).toBe(ALPHABET["..."]);
    expect(EngToMorse("s", ALPHABET)).toBe(ALPHABET["s"]);
    expect(MorseToEng("--..--", ALPHABET)).toBe(ALPHABET["--..--"]);
    expect(EngToMorse("@", ALPHABET)).toBe(ALPHABET["@"]);
  });
});

// //Check the types for the input and output values of the functions
// describe("EngToMorse & MorseToEng functions", () => {
//   test("Input is not a string or number or other valid character", () => {
//     expect(() =>
//       MorseToEng([1, 2, 3], ALPHABET).toThrowError(invalidInputError)
//     );
//     expect(() =>
//       EngToMorse([1, 2, 3], ALPHABET).toThrowError(invalidInputError)
//     );
//     expect(() =>
//       MorseToEng({ 1: M, 2: A, 3: R }, ALPHABET).toThrowError(invalidInputError)
//     );
//     expect(() =>
//       EngToMorse({ 1: M, 2: A, 3: R }, ALPHABET).toThrowError(invalidInputError)
//     );
//   });

//Check the types for the input and output values of the functions
describe("EngToMorse & MorseToEng functions", () => {
  test("Output is a string", () => {
    expect(typeof MorseToEng("---...", ALPHABET)).toBe("string");
    expect(typeof EngToMorse("hello", ALPHABET)).toBe("string");
  });

  test("Translation between Morse and English is accurate and as expected", () => {
    expect(MorseToEng("-----", ALPHABET)).toBe(0);
    expect(EngToMorse("0", ALPHABET)).toBe("-----");
    expect(MorseToEng(".---", ALPHABET)).toBe(j);
    expect(EngToMorse("j", ALPHABET)).toBe(".---");
  });
});

//Check that output of reverseObject is accurate (i.e.That it switches the key/value pairs around)
describe("reverseObject function", () => {
  test("Output of reverseObject function is as expected", () => {
    expect(reverseObject({ a: b }, ALPHABET)).toBe({ b: a });
    expect(reverseObject({ o: "---" }, ALPHABET)).toBe({ "---": o });
  });
});
