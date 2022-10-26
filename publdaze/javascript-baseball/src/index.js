import { ExceptionCase, validation } from './modules/exception.js';
import { alertMsg, getOutputText } from './modules/announce.js';
import {
  userInput,
  submit,
  gameRestartButton,
  result,
} from './modules/element.js';
import {
  countMatchNumbers,
  countMatchNumbersWithPos,
} from './modules/counting.js';

const init = () => {
  gameRestartButton.style.display = 'none';
  userInput.value = '';
  result.innerHTML = '';
};

const getRandomNumbers = () => {
  return Array.from({ length: 3 }, () =>
    MissionUtils.Random.pickNumberInRange(1, 9),
  );
};

const getInputNumbers = () => userInput.value.split('').map(Number);

const getStrike = (randomNumbers, inputNumArray) => {
  return countMatchNumbersWithPos(randomNumbers, inputNumArray);
};

const getBall = (randomNumbers, inputNumArray) => {
  return (
    countMatchNumbers(randomNumbers, inputNumArray) -
    countMatchNumbersWithPos(randomNumbers, inputNumArray)
  );
};

const isWin = (strike) => strike === 3;

const getResult = (computerInputNumbers, userInputNumbers) => {
  const strike = getStrike(computerInputNumbers, userInputNumbers);
  const ball = getBall(computerInputNumbers, userInputNumbers) - strike;

  if (isWin(strike, ball)) {
    gameRestartButton.style.display = 'block';
    return '🎉정답을 맞추셨습니다🎉<br/>게임을 새로 시작하시겠습니까?';
  }

  return getOutputText(strike, ball);
};

const isInvalid = (exception) => {
  return exception !== ExceptionCase.NOTHING;
};

const play = (computerInputNumbers, userInputNumbers) => {
  const exception = validation(userInputNumbers);

  if (isInvalid(exception)) {
    alertMsg(exception.description);
    userInput.value = '';
    return '';
  }

  return getResult(computerInputNumbers, userInputNumbers);
};

const restart = () => {
  gameRestartButton.addEventListener('click', (e) => {
    e.preventDefault();

    init();

    const computerInputNumbers = getRandomNumbers();
    const userInputNumbers = getInputNumbers();

    play(computerInputNumbers, userInputNumbers);
  });
};

export default function BaseballGame() {
  init();
  const computerInputNumbers = getRandomNumbers();

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const userInputNumbers = getInputNumbers();
    const playResult = play(computerInputNumbers, userInputNumbers);

    result.innerHTML = playResult;
  });

  restart();
}

BaseballGame();
