const oneTurnOfCarRaceResult = (car) => `<div>${car.getName()}: ${car.getResult()}</div>`;

const resultForOneMove = (carClassArray) => {
  let result = '';
  carClassArray.forEach((car) => {
    car.moveOrStop();
    result += oneTurnOfCarRaceResult(car);
  });
  return `${result}</br>`;
};

const listOfWinners = (carClassArray) => {
  return carClassArray
    .map((element) => ({ distance: element.getDistance(), car: element.name }))
    .sort((a, b) => b.distance - a.distance)
    .reduce((prev, curr, currIdx, array) => {
      if (array[0].distance === curr.distance) {
        return [...prev, curr.car];
      }
      return prev;
    }, [])
    .join(',');
};

export { resultForOneMove, listOfWinners };
