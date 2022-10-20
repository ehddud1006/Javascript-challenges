const strikeJudgment = (randomNumberList, userInputNumber) => {
  let strikeCount = 0;
  const notStrikeIndexList = [];
  randomNumberList.forEach((randomNumber, index) => {
    if (randomNumber === userInputNumber[index]) {
      strikeCount += 1;
    } else {
      notStrikeIndexList.push(index);
    }
  });

  return [strikeCount, notStrikeIndexList];
};

const ballJudment = (notStrikeIndexList, randomNumberList, userInputNumber) => {
  let ballCount = 0;
  notStrikeIndexList.forEach((notStrikeIndex) => {
    if (randomNumberList.includes(userInputNumber[notStrikeIndex])) {
      ballCount += 1;
    }
  });
  return ballCount;
};
const strikeBallJudgment = (randomNumberList, userInputNumber) => {
  const [strikeCount, notStrikeIndexList] = strikeJudgment(randomNumberList, userInputNumber);
  const ballCount = ballJudment(notStrikeIndexList, randomNumberList, userInputNumber);
  return [strikeCount, ballCount];
};

export default strikeBallJudgment;
