const isNumberArray = (arr) => arr.every((element) => !Number.isNaN(element));

const isInRange = (x, min, max) => x >= min && x <= max;

const isInRangeArray = (arr, min, max) =>
  arr.every((element) => isInRange(element, min, max));

const isLengthEquals = (arr, num) => arr.length === num;

const isEachUniqueNumber = (arr) =>
  arr.every((element) => arr.indexOf(element) === arr.lastIndexOf(element));

const hasSameNumber = (arr, n) => arr.includes(n);

export {
  isNumberArray,
  isInRange,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
  hasSameNumber,
};
