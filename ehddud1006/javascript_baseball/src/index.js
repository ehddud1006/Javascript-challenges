import strikeBallJudgment from './modules/strikeBallJudgment.js';
import { generateResultMessage, init } from './modules/gameMethod.js';
import { ANSWER } from './modules/constant.js';

export default function BaseballGame() {
  const play = (computerInputNumbers, userInputNumbers) => {
    const [strikeCount, ballCount] = strikeBallJudgment(computerInputNumbers, userInputNumbers);
    if (strikeCount === 3) {
      return ANSWER;
    }
    return generateResultMessage(strikeCount, ballCount);
  };

  init(play);
}

BaseballGame();
