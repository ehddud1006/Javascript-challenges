import {
  isNumberArray,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
} from './validation.js';

const ExceptionCase = {
  NUMBER_FORMAT_EXCEPTION: Symbol('입력값은 숫자로만 구성되어야합니다.'),
  RANGE_EXCEPTION: Symbol('1~9 사이의 값을 넣어주세요.'),
  LENGTH_EXCEPTION: Symbol('3개의 숫자를 넣어주세요.'),
  DUPLICATION_EXCEPTION: Symbol('중복된 값이 있으면 안됩니다.'),
  NOTHING: Symbol(''),
};
Object.freeze(ExceptionCase);

const validation = (inputNumArray) => {
  if (!isNumberArray(inputNumArray)) {
    return ExceptionCase.NUMBER_FORMAT_EXCEPTION;
  }
  if (!isInRangeArray(inputNumArray, 1, 9)) {
    return ExceptionCase.RANGE_EXCEPTION;
  }
  if (!isLengthEquals(inputNumArray, 3)) {
    return ExceptionCase.LENGTH_EXCEPTION;
  }
  if (!isEachUniqueNumber(inputNumArray)) {
    return ExceptionCase.DUPLICATION_EXCEPTION;
  }
  return ExceptionCase.NOTHING;
};

export { ExceptionCase, validation };
