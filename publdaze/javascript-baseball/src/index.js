import getElements from './modules/element.js';
import { alertMsg, getOutputText } from './modules/announce.js';
import {
  countMatchNumbers,
  countMatchNumbersWithPos,
} from './modules/counting.js';
import { ExceptionCase, checkOccuredError } from './modules/exception.js';

const init = (userInput, gameRestartButton, result) => {
  gameRestartButton.style.display = 'none';
  userInput.value = '';
  result.innerHTML = '';
};

const getRandomNumbers = () =>
  Array.from({ length: 3 }, () => MissionUtils.Random.pickNumberInRange(1, 9));

const isWin = strike => strike === 3;

export default function BaseballGame() {
  const { userInput, submit, gameRestartButton, result } = getElements();

  init(userInput, gameRestartButton, result);
  let randomNumbers = getRandomNumbers();

  submit.addEventListener('click', e => {
    e.preventDefault();

    const inputNumArray = userInput.value.split('').map(Number);
    const exception = checkOccuredError(inputNumArray);

    if (exception !== ExceptionCase.NOTHING) {
      alertMsg(exception.description);
      userInput.value = '';
      return;
    }

    const strike = countMatchNumbersWithPos(randomNumbers, inputNumArray);
    const ball = countMatchNumbers(randomNumbers, inputNumArray) - strike;

    if (isWin(strike, ball)) {
      result.innerHTML =
        '🎉정답을 맞추셨습니다🎉<br/>게임을 새로 시작하시겠습니까?';
      gameRestartButton.style.display = 'block';
      return;
    }

    result.innerHTML = getOutputText(strike, ball);
  });

  gameRestartButton.addEventListener('click', e => {
    e.preventDefault();

    init(userInput, gameRestartButton, result);
    randomNumbers = getRandomNumbers();
  });
}

BaseballGame();
