const randomNumberGenerator = () => {
  // eslint-disable-next-line no-undef
  return MissionUtils.Random.pickNumberInRange(0, 9);
};

class Car {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
    console.log(randomNumberGenerator());
  }
}

export default Car;
