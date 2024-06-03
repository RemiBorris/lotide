const assertEqual = require("./assertEqual");

// Function Code
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item]))
      return item;
  }
};

module.exports = findKey;

// Test Code
const data1 =   {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const data2 = { color: "red", size: "medium" };
const data3 = { a: 1, b: [2, 3, 4] };
const data4 = { a: 1, b: 2, c: 3 };

assertEqual(findKey(data1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(data2, x => x === "red"), "color");
assertEqual(findKey(data3, x => Array.isArray(x)), "b");
assertEqual(findKey(data4, x => x === 3), "c");