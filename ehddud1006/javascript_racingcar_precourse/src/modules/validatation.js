const isEmpty = (carNamesInput) => {
  if (carNamesInput === '') return true;
  return false;
};

const elementValidation = (element) => {
  if (element.length > 5 || isEmpty(element)) return true;
  return false;
};

const carNamesInputToArrayValidation = (carNamesInput) => {
  const carNamesInputToArray = carNamesInput.split(',');
  return carNamesInputToArray.some(elementValidation);
};
const carNamesInputValidation = (carNamesInput) => {
  if (isEmpty(carNamesInput)) return false;
  if (carNamesInputToArrayValidation(carNamesInput)) return false;

  return true;
};

export default carNamesInputValidation;
