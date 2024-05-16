// AsserEqual function to test if actual result is as expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};
// Objective - return new array which removes first element and does not impact first array

// Create new array and pass first array in while removing the first index value
let newArray = [];
const tail = function(array) {
  newArray = array.slice(1);
};

// Test Code
const words = ["testin","this","out"];
tail(words);
assertEqual(words.length, 3);