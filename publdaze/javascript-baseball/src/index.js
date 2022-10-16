import getElements from './modules/element.js';
import {
  isNumberArray,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
} from './modules/validation.js';
import alertMsg from './modules/announce.js';
import {
  countMatchNumbers,
  countMatchNumbersWithPos,
} from './modules/counting.js';

const isOccuredError = inputNumArray => {
  if (!isNumberArray(inputNumArray)) {
    alertMsg('입력값은 숫자로만 구성되어야합니다.');
    return true;
  }
  if (!isInRangeArray(inputNumArray, 1, 9)) {
    alertMsg('1~9 사이의 값을 넣어주세요.');
    return true;
  }
  if (!isLengthEquals(inputNumArray, 3)) {
    alertMsg('3개의 숫자를 넣어주세요.');
    return true;
  }
  if (!isEachUniqueNumber(inputNumArray)) {
    alertMsg('중복된 값이 있으면 안 됩니다.');
    return true;
  }
  return false;
};

const isWin = strike => {
  return strike === 3;
};

const getOutputText = (strike, ball) => {
  let output = '';
  if (ball > 0) output += ball + '볼 ';
  if (strike > 0) output += strike + '스트라이크';
  if (output.length === 0) output = '낫싱';

  return output;
};

export default function BaseballGame() {
  const { userInput, submit, gameRestartButton, result } = getElements();
  let randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

  gameRestartButton.style.display = 'none';

  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const inputNumArray = userInput.value.split('').map(Number);
    console.log(inputNumArray, randomNumbers);
    if (isOccuredError(inputNumArray)) userInput.value = '';
    else {
      const strike = countMatchNumbersWithPos(randomNumbers, inputNumArray);
      const ball = countMatchNumbers(randomNumbers, inputNumArray) - strike;
      if (isWin(strike, ball)) {
        result.innerHTML =
          '🎉정답을 맞추셨습니다🎉<br/>게임을 새로 시작하시겠습니까?';
        gameRestartButton.style.display = 'block';
      } else {
        result.innerHTML = getOutputText();
      }
    }
  });
  gameRestartButton.addEventListener('click', function (e) {
    e.preventDefault();
    // reset
  });
}

BaseballGame();
