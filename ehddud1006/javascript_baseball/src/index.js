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
export default function BaseballGame() {
  const submitButton = document.querySelector('#submit');
  const userInput = document.querySelector('#user-input');
  const randomNumberList = randomNumberGenerator();

  const gameStart = (e) => {
    e.preventDefault();
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
