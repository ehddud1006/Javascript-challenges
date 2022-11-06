const alertMsg = (msg) => {
  alert(msg);
};

const hasBall = (ball) => ball > 0;
const hasStrike = (strike) => strike > 0;

const getOutputText = (strike, ball) => {
  if (hasBall(ball) && hasStrike(strike)) {
    return `${ball}볼 ${strike}스트라이크`;
  }
  if (hasBall(ball)) return `${ball}볼`;
  if (hasStrike(strike)) return `${strike}스트라이크`;
  return '낫싱';
};

export { alertMsg, getOutputText };
