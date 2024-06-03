const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findkey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  // no tests created
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findkey: findkey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
};