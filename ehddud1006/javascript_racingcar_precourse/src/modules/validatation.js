import { $ } from './dom.js';

const isEmpty = (carName) => {
  return carName === '';
};

const isLengthConditionDissatisfaction = (carNamesInput, condition) => carNamesInput.split(',').some(condition);

const isContainEmptyName = (carNamesInput) => carNamesInput.split(',').some(isEmpty);

const isDuplicate = (carNamesInput) => {
  const carNamesArray = carNamesInput.split(',');
  return carNamesArray.length !== new Set(carNamesArray).size;
};

const showErrorMessage = (message) => {
  alert(message);
};

const giveRetryChanceForClient = () => {
  const inputElement = $('#car-names-input');
  inputElement.value = '';
  inputElement.focus();
};

const carNamesInputException = (message) => {
  giveRetryChanceForClient();
  showErrorMessage(message);
  return false;
};

const lengthLimitCondition = (element) => element.length > 5;
const carNamesInputValidation = (carNamesInput) => {
  if (isEmpty(carNamesInput)) return carNamesInput('자동차이름을 입력해주세요. ex) east,west,south,north');

  if (isLengthConditionDissatisfaction(carNamesInput, lengthLimitCondition))
    return carNamesInputException('자동차의 이름의 길이는 5이하여야합니다.');

  if (isContainEmptyName(carNamesInput)) return carNamesInputException('빈 문자열을 자동차이름으로 입력하지마세요.');

  if (isDuplicate(carNamesInput)) carNamesInputException('중복된 자동차 이름이 있습니다.');

  return true;
};

export default carNamesInputValidation;
