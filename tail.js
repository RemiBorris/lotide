// pass original array in while removing the first index value and not modifying the original
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;