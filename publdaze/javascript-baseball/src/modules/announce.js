const alertMsg = (msg) => {
  alert(msg);
};

const getOutputText = (strike, ball) => {
  let output = '';
  if (ball > 0) output += `${ball}볼 `;
  if (strike > 0) output += `${strike}스트라이크`;
  if (output.length === 0) output = '낫싱';

  return output;
};

export { alertMsg, getOutputText };
