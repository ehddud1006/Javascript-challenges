const isNumberArray = arr => {
  arr.forEach(element => {
    if (Number.isNaN(element)) return false;
  });
  return true;
};

const isInRange = (x, min, max) => {
  return x >= min && x <= max;
};

const isInRangeArray = (arr, min, max) => {
  arr.forEach(element => {
    if (!isInRange(element, min, max)) return false;
  });
  return true;
};
