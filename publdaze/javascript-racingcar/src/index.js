import {
  carNamesInput,
  carNamesSubmitBtn,
  racingCountInput,
  racingCountSubmitBtn,
  racingWinners,
} from './modules/element.js';
import { getInputNumber, getInputStringArray } from './modules/input.js';

function Car(name) {
  this.name = name;
}

const handleCarNames = (e) => {
  e.preventDefault();

  const carNames = getInputStringArray(carNamesInput, ',');
  const cars = carNames.reduce((p, c) => [...p, new Car(c)], []);
};

const handleRacingCount = (e) => {
  e.preventDefault();

  const racingCount = getInputNumber(racingCountInput);
};

const Racing = () => {
  carNamesSubmitBtn.addEventListener('click', handleCarNames);
  racingCountSubmitBtn.addEventListener('click', handleRacingCount);
};

Racing();
