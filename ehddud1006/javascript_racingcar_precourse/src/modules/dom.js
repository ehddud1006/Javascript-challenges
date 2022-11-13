const $ = (selector) => document.querySelector(selector);

const $racingCountHeader = $('#racing-count-header');
const $racingCountForm = $('#racing-count-form');
const $racingResult = $('#racing-result');
const $racingWinnerInformation = $('#racing-winner-information');

const hideDomElement = () => {
  $racingCountHeader.style.display = 'none';
  $racingCountForm.style.display = 'none';
  $racingResult.style.display = 'none';
  $racingWinnerInformation.style.display = 'none';
};

const revealRacingCountForm = () => {
  $racingCountHeader.style.display = 'block';
  $racingCountForm.style.display = 'block';
};

const revealRacingResult = () => {
  $racingResult.style.display = 'block';
  $racingWinnerInformation.style.display = 'block';
};

export { hideDomElement, $, revealRacingCountForm, revealRacingResult };
