const randomNumberGenerator = () => {
  // eslint-disable-next-line no-undef
  return MissionUtils.Random.pickNumberInRange(0, 9);
};

class Car {
  constructor(name) {
    this.name = name;
    this.result = [];
  }

  getName() {
    return this.name;
  }

  moveOrStop() {
    if (randomNumberGenerator() >= 4) {
      this.result.push('-');
    }
  }

  getDistance() {
    return this.result.length;
  }

  getResult() {
    return this.result.join('');
  }
}

export default Car;
