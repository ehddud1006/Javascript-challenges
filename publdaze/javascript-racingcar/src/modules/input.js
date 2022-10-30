const getInputString = (userInput) => userInput.value;
const getInputNumber = (userInput) => Number(getInputString(userInput));
const getInputStringArray = (userInput, separator) =>
  getInputString(userInput).split(separator);

export { getInputNumber, getInputString, getInputStringArray };
