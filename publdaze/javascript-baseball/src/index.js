import getElements from './modules/element.js';
import {
  isNumberArray,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
} from './modules/validation.js';
import alertMsg from './modules/announce.js';

const isOccuredError = inputNumArray => {
  if (isNumberArray(inputNumArray)) {
    alertMsg('입력값은 숫자로만 구성되어야합니다.');
    return true;
  }
  if (isInRangeArray(inputNumArray, 1, 9)) {
    alertMsg('1~9 사이의 값을 넣어주세요.');
    return true;
  }
  if (isLengthEquals(inputNumArray, 3)) {
    alertMsg('3개의 숫자를 넣어주세요.');
    return true;
  }
  if (isEachUniqueNumber(inputNumArray)) {
    alertMsg('중복된 값이 있으면 안 됩니다.');
    return true;
  }
  return false;
};

export default function BaseballGame() {
  const { userInput, submit, gameRestartButton, result } = getElements();

  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    const inputNumArray = userInput.value.split('').map(Number);
    if (isOccuredError(inputNumArray)) userInput.value = '';

    result.textContent = '';
  });
  gameRestartButton.addEventListener('click', function (e) {
    e.preventDefault();
    // reset
  });
}

BaseballGame();
