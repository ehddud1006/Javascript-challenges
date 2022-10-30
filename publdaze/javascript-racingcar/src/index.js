import {
  carNamesInput,
  carNamesSubmitBtn,
  racingCountInput,
  racingCountSubmitBtn,
  racingWinners,
} from './modules/element.js';
import { getInputNumber, getInputStringArray } from './modules/input.js';

const Racing = () => {
  carNamesSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const carNames = getInputStringArray(carNamesInput, ',');
  });

  racingCountSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const racingCount = getInputNumber(racingCountInput);
  });
};

Racing();
