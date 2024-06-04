const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = flatten;

// Tests
assertArraysEqual(flatten([1,2,3,[4,5]]),[1,2,3,4,5]);
assertArraysEqual(flatten([[1,2,3],[4,5,6]]),[1,2,3,4,5,6]);
assertArraysEqual(flatten([],[]),[]);
assertArraysEqual(flatten([[],[]],[]),[]);
assertArraysEqual(flatten(["1",2,3,["4",5]]),["1",2,3,"4",5]);
assertArraysEqual(flatten([1,2,3,4,5]),[1,2,3,4,5]);