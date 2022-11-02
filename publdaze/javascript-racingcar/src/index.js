import {
  carNamesInput,
  carNamesSubmitBtn,
  racingCountInput,
  racingCountSubmitBtn,
  racingResult,
  racingWinners,
} from './modules/element.js';
import {
  ExceptionCase,
  carNamesValidation,
  racingCountValidation,
} from './modules/exception.js';
import { getInputNumber, getInputStringArray } from './modules/input.js';
import { MIN_RACING_NUMBER, MAX_RACING_NUMBER } from './modules/constant.js';
import alertMsg from './modules/announce.js';

function Car(name) {
  this.name = name;
}

const getRandomNumbers = (racingCount) =>
  Array.from({ length: racingCount }, () =>
    // eslint-disable-next-line no-undef
    MissionUtils.Random.pickNumberInRange(MIN_RACING_NUMBER, MAX_RACING_NUMBER),
  );

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

const isInvalid = (exception) => exception !== ExceptionCase.NOTHING;
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

const getFinalMove = (carsInstance) =>
  carsInstance.map((car) => car.stackedMoveCounts.at(-1));

const getMaxMove = (arr) => Math.max(...arr);

const getWinCars = (maxMove, carsInstance) =>
  carsInstance.filter((car) => car.stackedMoveCounts.at(-1) === maxMove);

const printWinners = (winCars) => {
  racingWinners.innerHTML = winCars.map((winCar) => winCar.name).join(',');
};

const printResult = (carsInstance, racingCount) => {
  racingResult.innerHTML += '<br /><br />';
  for (let i = 0; i < racingCount; i += 1) {
    carsInstance.forEach((car) => {
      racingResult.innerHTML += printEachTurnResult(car, i);
    });
    racingResult.innerHTML += '<br />';
  }
  const maxMove = getMaxMove(getFinalMove(carsInstance));
  const winCars = getWinCars(maxMove, carsInstance);
  printWinners(winCars);
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
