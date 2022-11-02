import {
  MIN_RACING_NUMBER,
  MAX_RACING_NUMBER,
  MAX_CAR_NAME_LENGTH,
} from './constant.js';
import { isInRange, includeLengthExceed, isEachUnique } from './validation.js';

const ExceptionCase = {
  NUMBER_FORMAT_EXCEPTION: Symbol('입력값은 숫자로만 구성되어야합니다.'),
  RANGE_EXCEPTION: Symbol(
    `${MIN_RACING_NUMBER}~${MAX_RACING_NUMBER} 사이의 값을 넣어주세요.`,
  ),
  LENGTH_EXCEPTION: Symbol(
    `${MAX_CAR_NAME_LENGTH}자 이하의 이름을 넣어주세요.`,
  ),
  EXIST_EXCEPTION: Symbol('입력 값이 없습니다.'),
  DUPLICATION_EXCEPTION: Symbol('중복된 이름이 있으면 안됩니다.'),
  NOTHING: Symbol(''),
};
Object.freeze(ExceptionCase);

const carNamesValidation = (inputArray) => {
  if (!inputArray) {
    return ExceptionCase.EXIST_EXCEPTION;
  }
  if (includeLengthExceed(inputArray, MAX_CAR_NAME_LENGTH)) {
    return ExceptionCase.LENGTH_EXCEPTION;
  }
  if (!isEachUnique(inputArray)) {
    return ExceptionCase.DUPLICATION_EXCEPTION;
  }
  return ExceptionCase.NOTHING;
};

const racingCountValidation = (inputNum) => {
  if (!inputNum) {
    return ExceptionCase.EXIST_EXCEPTION;
  }
  if (!isInRange(inputNum, MIN_RACING_NUMBER, MAX_RACING_NUMBER)) {
    return ExceptionCase.RANGE_EXCEPTION;
  }
  return ExceptionCase.NOTHING;
};

export { ExceptionCase, carNamesValidation, racingCountValidation };
