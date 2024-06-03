const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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

//export
module.exports = eqObjects;

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