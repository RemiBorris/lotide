const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
const assertArraysEqual = require("./assertArraysEqual");

//Test code

assertArraysEqual(map(words, (word) => word.length),[6, 7, 2, 5, 3]);
assertArraysEqual(map(words, (word) => word[word.length - 1]),["d", "l", "o", "r", "m"]);
assertArraysEqual(map(words, (word) => word.indexOf("o")),[2, 1, 1, 3, 1]);