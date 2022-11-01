import {
  carNamesInput,
  carNamesSubmitBtn,
  racingCountInput,
  racingCountSubmitBtn,
  racingWinners,
} from './modules/element.js';
import {
  isInRange,
  includeLengthExceed,
  isEachUnique,
} from './modules/validation.js';
import ExceptionCase from './modules/exception.js';
import { getInputNumber, getInputStringArray } from './modules/input.js';
import {
  MIN_RACING_NUMBER,
  MAX_RACING_NUMBER,
  MAX_CAR_NAME_LENGTH,
} from './modules/constant.js';
import alertMsg from './modules/announce.js';

function Car(name) {
  this.name = name;
}

const isInvalid = (exception) => {
  return exception !== ExceptionCase.NOTHING;
};

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

const handleCarNames = (e) => {
  e.preventDefault();

  const carNames = getInputStringArray(carNamesInput, ',');
  const exception = carNamesValidation(carNames);

  if (isInvalid(exception)) {
    alertMsg(exception.description);
  }

  const cars = carNames.reduce((p, c) => [...p, new Car(c)], []);
};

const handleRacingCount = (e) => {
  e.preventDefault();

  const racingCount = getInputNumber(racingCountInput);
  const exception = racingCountValidation(racingCount);

  if (isInvalid(exception)) {
    alertMsg(exception.description);
  }
};

const Racing = () => {
  carNamesSubmitBtn.addEventListener('click', handleCarNames);
  racingCountSubmitBtn.addEventListener('click', handleRacingCount);
};

Racing();
