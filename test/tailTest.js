const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const tail = require("../tail");
// Test Code

describe('#tail', () => {
  it('return an empty array when receiving []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('return an empty array when receiving 1 item', () => {
    assert.deepEqual(tail([1]), []);
  });
  it('check that the first element of the returned array is the second element of the origina array', () => {
    assert.deepEqual(tail(["testing","this","out"])[0], "this");
  });
});
