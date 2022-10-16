import getElements from './modules/element.js';
import {
  isNumberArray,
  isInRangeArray,
  isLengthEquals,
  isEachUniqueNumber,
} from './modules/validation.js';
import alertMsg from './modules/announce.js';

const alertOccuredErrorCase = inputNumArray => {
  switch (false) {
    case isNumberArray(inputNumArray):
      alertMsg('입력값은 숫자로만 구성되어야합니다.');
      break;
    case isInRangeArray(inputNumArray, 1, 9):
      alertMsg('1~9 사이의 값을 넣어주세요.');
      break;
    case isLengthEquals(inputNumArray, 3):
      alertMsg('3개의 숫자를 넣어주세요.');
      break;
    case isEachUniqueNumber(inputNumArray):
      alertMsg('중복된 값이 있으면 안 됩니다.');
      break;
  }
};

export default function BaseballGame() {
  const { userInput, submit, gameRestartButton, result } = getElements();

  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const inputNumArray = userInput.value.split('').map(Number);
    alertOccuredErrorCase(inputNumArray);

    result.textContent = '';
  });
  gameRestartButton.addEventListener('click', function (e) {
    e.preventDefault();
    // reset
  });
}

BaseballGame();
