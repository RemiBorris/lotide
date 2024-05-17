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

// Function to return 1 non-nested array from a potentially nested array
const flatten = function(source) {
  let flattenedArray = [];
  for (let x of source) {
    if (Array.isArray(x)) {
      for (let y of x) {
        flattenedArray.push(y);
      }
    } else {
      flattenedArray.push(x);
    }
  } return flattenedArray;
};

// Tests
assertArraysEqual(flatten([1,2,3,[4,5]]),[1,2,3,4,5]);
assertArraysEqual(flatten([[1,2,3],[4,5,6]]),[1,2,3,4,5,6]);
assertArraysEqual(flatten([],[]),[]);
assertArraysEqual(flatten([[],[]],[]),[]);
assertArraysEqual(flatten(["1",2,3,["4",5]]),["1",2,3,"4",5]);
assertArraysEqual(flatten([1,2,3,4,5]),[1,2,3,4,5]);