import Car from './model/Car.js';
import { hideDomElement, $, revealRacingCountForm, revealRacingResult } from './modules/dom.js';
import carNamesInputValidation from './modules/validatation.js';
import { resultForOneMove, listOfWinners } from './modules/render.js';

class CarRacingGame {
  constructor() {
    this.carNamesArray = [];
    this.racingCount = 0;
    this.carClassArray = [];
  }

  init() {
    this.preventFormSubmitEvent();
    this.registerCarNameSubmitEvent();
    this.registerRacingCountSubmitEvent();
    hideDomElement();
  }

  setCarObject() {
    this.carClassArray = this.carNamesArray.map((element) => new Car(element));
  }

  makeResultDomElementString() {
    return Array.from({ length: this.racingCount }, () => resultForOneMove(this.carClassArray)).join('');
  }

  // eslint-disable-next-line class-methods-use-this
  preventFormSubmitEvent() {
    $('#racing-names-form').addEventListener('submit', (e) => e.preventDefault());
    $('#racing-count-form').addEventListener('submit', (e) => e.preventDefault());
  }

  registerCarNameSubmitEvent() {
    $('#car-names-submit').addEventListener('click', () => {
      const carNamesInputValue = $('#car-names-input').value;
      if (carNamesInputValidation(carNamesInputValue)) {
        this.carNamesArray = carNamesInputValue.split(',');
        revealRacingCountForm();
      }
    });
  }

  registerRacingCountSubmitEvent() {
    $('#racing-count-submit').addEventListener('click', () => {
      this.racingCount = $('#racing-count-input').value;
      revealRacingResult();
      this.setCarObject();
      $('#racing-result').insertAdjacentHTML('afterend', this.makeResultDomElementString());
      $('#racing-winners').textContent = listOfWinners(this.carClassArray);
    });
  }
}

const RacingGame = new CarRacingGame();

RacingGame.init();
