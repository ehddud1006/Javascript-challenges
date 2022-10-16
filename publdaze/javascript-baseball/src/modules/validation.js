const isNumberArray = arr => {
  return arr.every(element => {
    return !Number.isNaN(element);
  });
};

const isInRange = (x, min, max) => {
  return x >= min && x <= max;
};

const isInRangeArray = (arr, min, max) => {
  return arr.every(element => {
    return isInRange(element, min, max);
  });
};

const isLengthEquals = (arr, num) => {
  return arr.length === num ? true : false;
};

const isEachUniqueNumber = arr => {
  return arr.every(element => {
    return arr.indexOf(element) === arr.lastIndexOf(element);
  });
};

export {
  isNumberArray,
  isInRange,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
};
