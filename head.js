// AsserEqual function to test if actual result is as expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};
// function to return the first item in an array
const head = function(array) {
  return array[0];
}
// Test Code
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);