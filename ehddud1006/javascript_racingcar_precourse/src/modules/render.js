const resultForOneMove = (carClassArray) => {
  let result = '';
  carClassArray.forEach((car) => {
    car.move();
    result += `<div>${car.getName()}: ${car.getResult()}</div>`;
  });
  return `${result}</br>`;
};

export default resultForOneMove;
