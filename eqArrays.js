// Function Implementation to check if we receive the expected value
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
};

// Function to compare 2 arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

// Test Case for different length string
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should FAIL
// Test Case for matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// Test Case for non matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should FAIL
//Test Case for number arrays vs string array
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should FAIL