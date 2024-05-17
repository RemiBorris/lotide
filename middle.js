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


// Function to return middle of an array
const middle = function(array) {
  const middleArray = [];
  const center = array.length / 2;
  if (array.length < 3) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[center - 1]);
    middleArray.push(array[center]);
  } else {
    middleArray.push(array[Math.floor(center)]);
  }
  return middleArray;
};

//Tests
assertArraysEqual(middle([1,2,3,4]),([2,3]));
assertArraysEqual(middle([1,2,3]),([2]));
assertArraysEqual(middle([1]),([]));
assertArraysEqual(middle([1,2]),([]));
assertArraysEqual(middle([1,2,3,4,5]),([3]));
assertArraysEqual(middle([1,2,3,4,5,6]),([3,4]));