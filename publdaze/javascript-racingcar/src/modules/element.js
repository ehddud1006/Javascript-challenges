const $ = (selector) => document.querySelector(selector);

const carNamesInput = $('#car-names-input');
const carNamesSubmitBtn = $('#car-names-submit');
const racingCountInput = $('#racing-count-input');
const racingCountSubmitBtn = $('#racing-count-submit');
const racingWinners = $('#racing-winners');

export {
  carNamesInput,
  carNamesSubmitBtn,
  racingCountInput,
  racingCountSubmitBtn,
  racingWinners,
};
