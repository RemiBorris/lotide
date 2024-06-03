const assertEqual = require("../assertEqual");
const tail = require("../tail");
// Test Code

// Test to ensure original array length is not modified
const test1 = ["testing","this","out"];
tail(test1);
assertEqual(test1.length, 3);
// Test that an empty array returns an empty array
const test2 = [];
assertEqual(tail(test2).length, 0);
// Test 1 item array should return an empty array
const test3 = ["testing"];
assertEqual(tail(test3).length, 0);
// Check that the first element of the returned array is the second element of the original array
assertEqual(tail(test1)[0], "this");