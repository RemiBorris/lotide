const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
// Test Case for different length string
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should FAIL
// Test Case for matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// Test Case for non matching arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should FAIL
//Test Case for number arrays vs string array
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should FAIL