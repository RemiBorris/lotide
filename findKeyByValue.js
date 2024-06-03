const assertEqual = require("./assertEqual");

//Function Code
const findKeyByValue = function(givenObject, findKey) {
  for (let givenKey in givenObject) {
    if (givenObject[givenKey] === findKey) {
      return givenKey;
    }
  }
};

module.exports = findKeyByValue;

//Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
