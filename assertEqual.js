// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
    return;
  } else console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  return;
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, "2");
assertEqual("same", "same");
assertEqual("same", "different");
assertEqual(42, 25);