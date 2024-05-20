// assertEqual Function for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letters = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (letters[letter]) {
        letters[letter] ++;
      } else {
        letters[letter] = 1;
      }
    }
  } return letters;
};

//test code
const result1 = countLetters("lighthouse in the house");
const result2 = countLetters("Hello World");
const result3 = countLetters("Hello");

assertEqual(result1["h"],4);
assertEqual(result1["e"],3);
assertEqual(result1["l"],1);
assertEqual(result2["l"],3);
assertEqual(result2["o"],2);
assertEqual(result3["l"],2);
assertEqual(result3["h"],undefined);