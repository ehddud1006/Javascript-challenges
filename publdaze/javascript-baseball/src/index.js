import getElements from './modules/element.js';

export default function BaseballGame() {
  const { userInput, submit, gameRestartButton, result } = getElements();

  submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(userInput.value);
    result.textContent = '';
  });
  gameRestartButton.addEventListener('click', function (e) {
    e.preventDefault();
    // reset
  });
}

BaseballGame();
