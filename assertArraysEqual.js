// Function to compare 2 arrays and console log
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Function to compare 2 arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

// Test Case for different length string
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
// Test Case for matching arrays
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// Test Case for non matching arrays
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should FAIL
//Test Case for number arrays vs string array
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // => should FAIL