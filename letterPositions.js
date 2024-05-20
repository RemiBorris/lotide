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

// Function to compare 2 arrays and console log
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index ++) {
    if (sentence[index] !== " ") {
      if (results.hasOwnProperty(sentence[index])) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [];
        results[sentence[index]].push(index);
      }
    }
  }
  return results;
};
//Test
const result1 = letterPositions(("lighthouse in the house"));
const result2 = letterPositions(("this is a test"));

assertArraysEqual(result1.h, [3, 5, 15, 18]);
assertArraysEqual(result1.o, [6, 19]);
assertArraysEqual(result2.t, [0, 10, 13]);