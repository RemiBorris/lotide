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

// Function to remove instances from an array
const without = function(source, itemsToRemove) {
  let reducedArray = [];
  for (let i of source) {
    if (itemsToRemove.includes(i) !== true) {
      reducedArray.push(i);
    }
  } return reducedArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// Tests
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], ["1"]),[1, 2, 3]); // => [1, 2, 3]
assertArraysEqual(without([], [1]),[]); // => []