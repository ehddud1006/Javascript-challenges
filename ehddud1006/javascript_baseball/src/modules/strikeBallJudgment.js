const strikeJudgment = (randomNumberList, userInputNumber) => {
  let strikeCount = 0;
  const notStrikeIndexList = [];
  for (let i = 0; i < 3; i += 1) {
    if (randomNumberList[i] === userInputNumber[i]) {
      strikeCount += 1;
    } else {
      notStrikeIndexList.push(i);
    }
  }
  return [strikeCount, notStrikeIndexList];
};

const ballJudment = (notStrikeIndexList, randomNumberList, userInputNumber) => {
  let ballCount = 0;
  notStrikeIndexList.forEach((notStrkeIndex) => {
    if (randomNumberList.includes(userInputNumber[notStrkeIndex])) {
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
