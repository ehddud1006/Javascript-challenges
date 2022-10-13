const randomNumberGenerator = () => {
  const randomNumberList = [];
  while (randomNumberList.length < 3) {
    // eslint-disable-next-line no-undef
    const N = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumberList.includes(N)) {
      randomNumberList.push(N);
    }
  }
  return randomNumberList;
};

const isRightLength = (num) => {
  return num.length === 3;
};
const hasDuplicatedNumbers = (num) => {
  return new Set(num).size !== num.length;
};

const hasZero = (num) => {
  return num.indexOf('0') !== -1;
};

const isNumeric = (num) => {
  return !Number.isNaN(Number(num));
};

const isValidNumbers = (num) => {
  return !hasDuplicatedNumbers(num) && !hasZero(num) && isRightLength(num) && isNumeric(num);
};

export default function BaseballGame() {
  const submitButton = document.querySelector('#submit');
  const userInput = document.querySelector('#user-input');
  const randomNumberList = randomNumberGenerator();

  const gameStart = (e) => {
    e.preventDefault();
    if (isValidNumbers(userInput.value)) {
      const userInputNumber = userInput.value.split('').map((v) => +v);
    } else {
      alert('🙅 1~9까지의 수를 중복없이 3개 작성해주세요!');
      userInput.value = '';
    }
  };

  const init = () => {
    submitButton.addEventListener('click', (e) => gameStart(e));
    userInput.addEventListener('keydown', (e) => {
      if (e.keyCode === 'Enter' || e.isComposing) {
        gameStart(e);
      }
    });
  };

  init();
}

BaseballGame();
