const $ = (selector) => document.querySelector(selector);

const userInput = $('#user-input');
const submit = $('#submit');
const gameRestartButton = $('#game-restart-button');
const result = $('#result');

export { userInput, submit, gameRestartButton, result };
