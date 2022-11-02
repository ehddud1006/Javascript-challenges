const isNumberArray = (arr) => arr.every((element) => !Number.isNaN(element));

const isInRange = (x, min, max) => x >= min && x <= max;

const isLengthExceed = (str, num) => str.length > num;
const includeLengthExceed = (arr, num) =>
  arr.some((element) => isLengthExceed(element, num));

const isEachUnique = (arr) =>
  arr.every((element) => arr.indexOf(element) === arr.lastIndexOf(element));

const isLegnthZero = (any) => any.length === 0;

const isStringExist = (str) => !isLegnthZero(str);

export {
  isNumberArray,
  isInRange,
  isLengthExceed,
  includeLengthExceed,
  isEachUnique,
  isLegnthZero,
  isStringExist,
};
