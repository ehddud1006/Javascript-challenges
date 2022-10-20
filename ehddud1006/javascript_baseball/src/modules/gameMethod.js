import { $submitButton, $userInput, $resultContainer } from './element.js';
import isValidNumbers from './validation.js';

const generateResultMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    return '낫싱';
  }
  if (strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0) {
    return `${strikeCount}스트라이크`;
  }
  return `${ballCount}볼 ${strikeCount}스트라이크`;
};

const randomNumberGenerator = () => {
  const randomNumberList = [];
  while (randomNumberList.length < 3) {
    // eslint-disable-next-line no-undef
    const N = MissionUtils.Random.pickNumberInRange(1, 9);
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
  restartText.textContent = '게임을 새로 시작하시겠습니까? ';
  restartButton.setAttribute('id', 'game-restart-button');
  restartButton.textContent = '게임 재시작';
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
  if (message === `<p>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</p>`) {
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
    alert('🙅 1~9까지의 수를 중복없이 3개 작성해주세요!');
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
