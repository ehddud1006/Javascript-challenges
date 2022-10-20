import { GAME_NUMBER_LENGTH } from './constant.js';

const isRightLength = (num) => {
  return num.length === GAME_NUMBER_LENGTH;
};
const hasNotDuplicatedNumbers = (num) => {
  return new Set(num).size === num.length;
};

const hasNotZero = (num) => {
  return num.indexOf('0') === -1;
};

const isNumeric = (num) => {
  return !Number.isNaN(Number(num));
};

const isValidNumbers = (num) => {
  return isRightLength(num) && hasNotDuplicatedNumbers(num) && hasNotZero(num) && isNumeric(num);
};

export default isValidNumbers;
