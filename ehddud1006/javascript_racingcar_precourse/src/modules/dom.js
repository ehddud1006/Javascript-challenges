const $ = (selector) => document.querySelector(selector);

const $racingCountHeader = $('#racing-count-header');
const $racingCountForm = $('#racing-count-form');

const hideDomElement = () => {
  $racingCountHeader.style.display = 'none';
  $racingCountForm.style.display = 'none';
  $('#racing-result').style.display = 'none';
  $('#racing-winner-information').style.display = 'none';
};

const revealRacingCountForm = () => {
  $racingCountHeader.style.display = 'block';
  $racingCountForm.style.display = 'block';
};

export { hideDomElement, $, revealRacingCountForm };
