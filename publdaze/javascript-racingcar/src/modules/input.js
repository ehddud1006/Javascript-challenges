import { isStringExist } from './validation.js';

const getInputString = (userInput) => userInput.value;

const getInputNumber = (userInput) => {
  const inputString = getInputString(userInput);
  if (!isStringExist(inputString)) return null;
  return parseInt(inputString, 10);
};

const getInputStringArray = (userInput, separator) => {
  const inputString = getInputString(userInput);
  if (!isStringExist(inputString)) return null;
  return inputString.split(separator);
};

export { getInputNumber, getInputString, getInputStringArray };
