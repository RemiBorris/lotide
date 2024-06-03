const assertArraysEqual = require("./assertArraysEqual");

// Function to remove instances from an array
const without = function(source, itemsToRemove) {
  let reducedArray = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      reducedArray.push(i);
    }
  } return reducedArray;
};

module.exports = without;

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// Tests
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], ["1"]),[1, 2, 3]); // => [1, 2, 3]
assertArraysEqual(without([], [1]),[]); // => []