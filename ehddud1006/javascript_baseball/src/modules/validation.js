const isRightLength = (num) => {
  return num.length === 3;
};
const hasDuplicatedNumbers = (num) => {
  return new Set(num).size !== num.length;
};

const hasZero = (num) => {
  return num.indexOf('0') !== -1;
};

const isNumeric = (num) => {
  return !Number.isNaN(Number(num));
};

const isValidNumbers = (num) => {
  return !hasDuplicatedNumbers(num) && !hasZero(num) && isRightLength(num) && isNumeric(num);
};

export default isValidNumbers;
