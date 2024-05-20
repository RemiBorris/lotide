// Test primitive values
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Function to compare 2 arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

//Function code
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  if (object1Keys.length !== Object.keys(object2).length) {
    return false;
  }
  for (let keys1 of object1Keys) {
    if (Array.isArray(object1[keys1])) {
      if (!eqArrays(object1[keys1],object2[keys1])) {
        return false;
      }
    } else if (object1[keys1] !== object2[keys1]) {
      return false;
    }
  } return true;
};

//Test primitive values

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject),true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject),false); // => false

// test Arrays as Values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),false); // => false