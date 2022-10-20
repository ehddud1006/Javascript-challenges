import { $submitButton, $userInput, $resultContainer } from './element.js';
import isValidNumbers from './validation.js';
import {
  ANSWER,
  STRIKE,
  BALL,
  NOTHING,
  MIN_NUMBER,
  MAX_NUMBER,
  GAME_NUMBER_LENGTH,
  RESTART_TEXT,
  RESTART_BUTTON_TEXT,
  EXCEPT_TYPE_INPUT_WARNING_MESSAGE,
} from './constant.js';

const generateResultMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    return NOTHING;
  }
  if (strikeCount === 0) {
    return `${ballCount}${BALL}`;
  }
  if (ballCount === 0) {
    return `${strikeCount}${STRIKE}`;
  }
  return `${ballCount}${BALL} ${strikeCount}${STRIKE}`;
};

const randomNumberGenerator = () => {
  const randomNumberList = [];
  while (randomNumberList.length < GAME_NUMBER_LENGTH) {
    // eslint-disable-next-line no-undef
    const N = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    if (!randomNumberList.includes(N)) {
      randomNumberList.push(N);
    }
  }
  return randomNumberList;
};

const createGameRestartButton = () => {
  const appContainer = document.querySelector('#app');
  const restartTextWrap = document.createElement('div');
  const restartButtonWrap = document.createElement('p');
  const restartText = document.createElement('span');
  const restartButton = document.createElement('button');
  restartText.textContent = RESTART_TEXT;
  restartButton.setAttribute('id', 'game-restart-button');
  restartButton.textContent = RESTART_BUTTON_TEXT;
  restartTextWrap.appendChild(restartText);
  restartButtonWrap.appendChild(restartButton);
  appContainer.appendChild(restartTextWrap);
  appContainer.appendChild(restartButtonWrap);
  return [restartButton, appContainer, restartButtonWrap, restartTextWrap];
};

const gameRestart = (play, init) => {
  const [restartButton, appContainer, restartButtonWrap, restartTextWrap] = createGameRestartButton();
  restartButton.addEventListener('click', () => {
    $resultContainer.innerHTML = '';
    $userInput.value = '';
    appContainer.removeChild(restartTextWrap);
    appContainer.removeChild(restartButtonWrap);
    init(play);
  });
};

const resultProvider = (message, play, init) => {
  if (message === ANSWER) {
    $resultContainer.innerHTML = message;
    gameRestart(play, init);
  } else {
    $resultContainer.textContent = message;
  }
};

const gameStart = (e, play, init, randomNumberList) => {
  e.preventDefault();

  if (isValidNumbers($userInput.value)) {
    const userInputNumber = $userInput.value.split('').map((v) => Number(v));
    const resultMessage = play(randomNumberList, userInputNumber);
    resultProvider(resultMessage, play, init);
  } else {
    alert(EXCEPT_TYPE_INPUT_WARNING_MESSAGE);
    $userInput.value = '';
  }
};

const init = (play) => {
  const randomNumberList = randomNumberGenerator();
  console.log(randomNumberList);
  $submitButton.addEventListener('click', (e) => gameStart(e, play, init, randomNumberList));
  $userInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 'Enter' || e.isComposing) {
      gameStart(e, play, init, randomNumberList);
    }
  });
};

export { generateResultMessage, randomNumberGenerator, init };
