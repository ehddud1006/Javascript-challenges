const $ = (selector) => document.querySelector(selector);

const hideDomElement = () => {
  $('#racing-count-header').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
  $('#racing-result').style.display = 'none';
  $('#racing-winner-information').style.display = 'none';
};

export default hideDomElement;
