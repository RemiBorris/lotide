# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @remiborris/lotide`

**Require it:**

`const _ = require('@remiborris/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- head: returns the first component of an array
- tail: returns the last component of an array
- middle: returns the middle component(s) of an array
- eqArrays: confirms if 2 arrays are equal
- assertEqual: asserts the expected results of any functions and confirms back if true
- assertArraysEqual: asserts the expected results of 2 arrays and confirms back if true
- eqObjects: verifys if 2 objects are equal and confirms back
- assertObjectsEqual: asserts the expected results if 2 objects are the same and confirms back if true
- countLetters: counts how many times each letter appears in text and stores it
- countOnly: counts how many times a given item appears in a data set
- findKey: find a key in an object by using callback functions and given value
- findKeyByValue: find a key in an object by stating the value the key holds
- letterPositions: return which positions a letter appears in in a data set
- takeUntil: return values from an array until a given condition is met then stop returning
- without: return an array with given values omitted