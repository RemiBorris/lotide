const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  } return results;
};
module.exports = takeUntil;
const assertArraysEqual = require("./assertArraysEqual");

//Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','),['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil(data1, x => x > 10),[1, 2, 5, 7, 2, -1, 2, 4, 5]);
assertArraysEqual(takeUntil(data2, x => x.length > 7),['I\'ve', 'been', 'to']);
