const assertArraysEqual = require("../assertArraysEqual");

// Test Case for different length string
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
// Test Case for matching arrays
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// Test Case for non matching arrays
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should FAIL
//Test Case for number arrays vs string array
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // => should FAIL