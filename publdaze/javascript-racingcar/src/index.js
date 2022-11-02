import {
  carNamesInput,
  carNamesSubmitBtn,
  racingCountInput,
  racingCountSubmitBtn,
  racingResult,
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

const getRandomNumbers = (racingCount) =>
  Array.from({ length: racingCount }, () =>
    // eslint-disable-next-line no-undef
    MissionUtils.Random.pickNumberInRange(MIN_RACING_NUMBER, MAX_RACING_NUMBER),
  );

const isInvalid = (exception) => exception !== ExceptionCase.NOTHING;

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

const getCarNames = () => getInputStringArray(carNamesInput, ',');

const getCarsInstance = () => {
  const carNames = getCarNames();
  const exception = carNamesValidation(carNames);

  if (isInvalid(exception)) {
    alertMsg(exception.description);
    carNamesInput.value = '';
    return null;
  }

  return carNames.reduce((p, c) => [...p, new Car(c)], []);
};

const getRacingCount = () => {
  const racingCount = getInputNumber(racingCountInput);
  const exception = racingCountValidation(racingCount);

  if (isInvalid(exception)) {
    alertMsg(exception.description);
    racingCountInput.value = '';
    return null;
  }
  return racingCount;
};

const hasAllRacingInfo = (racingInfo) =>
  racingInfo.carsInstance && racingInfo.racingCount;

const setCarsMoveCounts = (racingInfo) =>
  racingInfo.carsInstance.map((car) => ({
    ...car,
    moveCounts: getRandomNumbers(racingInfo.racingCount),
  }));

const setCarsStackedMoveCounts = (racingInfo) => {
  const carsInstance = setCarsMoveCounts(racingInfo);
  return carsInstance.map((car) => ({
    ...car,
    stackedMoveCounts: car.moveCounts.reduce((prev, curr) => {
      if (prev.length === 0) return [...prev, curr];
      return [...prev, prev.at(-1) + curr];
    }, []),
  }));
};

const printEachTurnResult = (car, i) => {
  return `${car.name}: ${'-'.repeat(car.stackedMoveCounts[i])}<br />`;
};

const printResult = (carsInstance, racingCount) => {
  racingResult.innerHTML += '<br /><br />';
  for (let i = 0; i < racingCount; i += 1) {
    carsInstance.forEach((car) => {
      racingResult.innerHTML += printEachTurnResult(car, i);
    });
    racingResult.innerHTML += '<br />';
  }
};

const race = (racingInfo) => {
  const carsInstance = setCarsStackedMoveCounts(racingInfo);

  printResult(carsInstance, racingInfo.racingCount);
};

const RacingGame = () => {
  const racingInfo = { carsInstance: null, racingCount: null };
  carNamesSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    racingInfo.carsInstance = getCarsInstance();
    if (hasAllRacingInfo(racingInfo)) race(racingInfo);
  });
  racingCountSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    racingInfo.racingCount = getRacingCount();
    if (hasAllRacingInfo(racingInfo)) race(racingInfo);
  });
};

RacingGame();
