import Car from './model/Car.js';
import { hideDomElement, $, revealRacingCountForm, revealRacingResult } from './modules/dom.js';
import carNamesInputValidation from './modules/validatation.js';
import resultForOneMove from './modules/render.js';

class CarRacingGame {
  constructor() {
    this.carNamesArray = [];
    this.racingCount = 0;
    this.carClassArray = [];
  }

  init() {
    this.registerCarNameSubmitEvent();
    this.registerRacingCountSubmitEvent();
    hideDomElement();
  }

  setCarObject() {
    this.carClassArray = this.carNamesArray.map((element) => new Car(element));
  }

  makeResultDomElementString() {
    let result = '';

    for (let i = 0; i < this.racingCount; i += 1) {
      result += resultForOneMove(this.carClassArray);
    }
    return result;
  }

  registerCarNameSubmitEvent() {
    $('#racing-names-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const carNamesInput = $('#car-names-input');
      if (carNamesInputValidation(carNamesInput.value)) {
        this.carNamesArray = carNamesInput.value.split(',');
        revealRacingCountForm();
      } else {
        window.alert('올바른 자동차명을 입력해주세요');
        carNamesInput.value = '';
      }
    });
  }

  registerRacingCountSubmitEvent() {
    $('#racing-count-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.racingCount = $('#racing-count-input').value;
      revealRacingResult();
      this.setCarObject();
      $('#racing-result').insertAdjacentHTML('afterend', this.makeResultDomElementString());
    });
  }
}

const RacingGame = new CarRacingGame();

RacingGame.init();
