const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//export code
module.exports = assertObjectsEqual;

//Test Code
const test1a = { color: "red", size: "medium" };
const test1b = { size: "medium", color: "red" };
assertObjectsEqual(test1a, test1b);

const test2a = { a: "1", b: 2 };
const test2b = { b: 2, a: "1" };
assertObjectsEqual(test2a, test2b);

const test3a = { a: 1, b: "2" };
const test3b = { b: 2, a: "1" };
assertObjectsEqual(test3a, test3b);

const test4a = { a: 1, b: 2 };
const test4b = { a: 1, b: 2, c: 3 };
assertObjectsEqual(test4a, test4b);

const test5a = { a: 1, b: [2, 3] };
const test5b = { b: [2, 3], a: 1 };
assertObjectsEqual(test5a, test5b);

const test6a = { a: 1, b: [2, 3, 4] };
const test6b = { b: [2, 3], a: 1 };
assertObjectsEqual(test6a, test6b);