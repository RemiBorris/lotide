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
// Test to ensure original array length is not modified
const test1 = ["testing","this","out"];
tail(test1);
assertEqual(test1.length, 3);
// Test that an empty array returns an empty array
const test2 = [];
assertEqual(tail(test2).length, 0);
// Test 1 item array should return an empty array
const test3 = ["testing"];
assertEqual(tail(test3).length, 0);