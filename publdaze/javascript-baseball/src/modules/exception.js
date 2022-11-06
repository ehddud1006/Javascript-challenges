import {
  isNumberArray,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
} from './validation.js';
import { MIN_NUMBER, MAX_NUMBER, GAME_NUMBER_LENGTH } from './constant.js';

const ExceptionCase = {
  NUMBER_FORMAT_EXCEPTION: Symbol('입력값은 숫자로만 구성되어야합니다.'),
  RANGE_EXCEPTION: Symbol(
    `${MIN_NUMBER}~${MAX_NUMBER} 사이의 값을 넣어주세요.`,
  ),
  LENGTH_EXCEPTION: Symbol(`${GAME_NUMBER_LENGTH}개의 숫자를 넣어주세요.`),
  DUPLICATION_EXCEPTION: Symbol('중복된 값이 있으면 안됩니다.'),
  NOTHING: Symbol(''),
};
Object.freeze(ExceptionCase);

const validation = (inputNumArray) => {
  if (!isNumberArray(inputNumArray)) {
    return ExceptionCase.NUMBER_FORMAT_EXCEPTION;
  }
  if (!isInRangeArray(inputNumArray, MIN_NUMBER, MAX_NUMBER)) {
    return ExceptionCase.RANGE_EXCEPTION;
  }
  if (!isLengthEquals(inputNumArray, GAME_NUMBER_LENGTH)) {
    return ExceptionCase.LENGTH_EXCEPTION;
  }
  if (!isEachUniqueNumber(inputNumArray)) {
    return ExceptionCase.DUPLICATION_EXCEPTION;
  }
  return ExceptionCase.NOTHING;
};

export { ExceptionCase, validation };
