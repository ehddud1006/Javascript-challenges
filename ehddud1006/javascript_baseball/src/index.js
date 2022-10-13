export default function BaseballGame() {
  const submitButton = document.querySelector('#submit');
  const userInput = document.querySelector('#user-input');

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
