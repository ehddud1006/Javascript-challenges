import { hideDomElement, $, revealRacingCountForm } from './modules/dom.js';
import carNamesInputValidation from './modules/validatation.js';

class CarRacingGame {
  constructor() {
    this.carNamesArray = [];
    this.racingCount = 0;
  }

  init() {
    this.registerCarNameSubmitEvent();
    this.registerRacingCountSubmitEvent();
    hideDomElement();
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
    });
  }
}

const RacingGame = new CarRacingGame();

RacingGame.init();
