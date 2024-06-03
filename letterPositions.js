const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index ++) {
    if (sentence[index] !== " ") {
      if (results.hasOwnProperty(sentence[index])) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//Test
const result1 = letterPositions(("lighthouse in the house"));
const result2 = letterPositions(("this is a test"));

assertArraysEqual(result1.h, [3, 5, 15, 18]);
assertArraysEqual(result1.o, [6, 19]);
assertArraysEqual(result2.t, [0, 10, 13]);