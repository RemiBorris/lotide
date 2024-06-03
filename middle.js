// Function to return middle of an array
const middle = function(array) {
  const middleArray = [];
  const center = array.length / 2;
  if (array.length < 3) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[center - 1]);
    middleArray.push(array[center]);
  } else {
    middleArray.push(array[Math.floor(center)]);
  }
  return middleArray;
};

module.exports = middle;