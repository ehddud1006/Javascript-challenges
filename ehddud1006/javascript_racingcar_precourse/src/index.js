import hideDomElement from './modules/dom.js';

class CarRacingGame {
  constructor() {
    this.carNamesInput = '';
  }

  init() {
    this.registerSubmitEvent();
    hideDomElement();
  }

  registerSubmitEvent() {
    document.querySelector('#racing-names-form').addEventListener('submit', (e) => {
      this.carNamesInput = document.querySelector('#car-names-input').value;
      console.log(this.carNamesInput);
      e.preventDefault();
    });
  }
}

const RacingGame = new CarRacingGame();

RacingGame.init();
