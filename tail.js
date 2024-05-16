// AsserEqual function to test if actual result is as expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};
// Objective - return new array which removes first element and does not impact first array

// pass original array in while removing the first index value and not modifying the original
const tail = function(array) {
  return array.slice(1);
};

// Test Code
const words = ["testin","this","out"];
tail(words);
assertEqual(words.length, 3);