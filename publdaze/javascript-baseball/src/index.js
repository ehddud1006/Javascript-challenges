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
import {
  MIN_NUMBER,
  MAX_NUMBER,
  GAME_NUMBER_LENGTH,
  WIN_STRIKE_COUNT,
} from './modules/constant.js';
import { hasSameNumber } from './modules/validation.js';

const init = () => {
  gameRestartButton.style.display = 'none';
  userInput.value = '';
  result.innerHTML = '';
};

const getRandomNumbers = () => {
  const randomNumbers = [];

  while (randomNumbers.length !== GAME_NUMBER_LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      MIN_NUMBER,
      MAX_NUMBER,
    );
    if (!hasSameNumber(randomNumbers, randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
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

const isWin = (strike) => strike === WIN_STRIKE_COUNT;

const getResult = (computerInputNumbers, userInputNumbers) => {
  const strike = getStrike(computerInputNumbers, userInputNumbers);
  const ball = getBall(computerInputNumbers, userInputNumbers);

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
