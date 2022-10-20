import strikeBallJudgment from './modules/strikeBallJudgment.js';
import { generateResultMessage, init } from './modules/gameMethod.js';

export default function BaseballGame() {
  const play = (computerInputNumbers, userInputNumbers) => {
    const [strikeCount, ballCount] = strikeBallJudgment(computerInputNumbers, userInputNumbers);
    if (strikeCount === 3) {
      return `<p>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</p>`;
    }
    return generateResultMessage(strikeCount, ballCount);
  };

  init(play);
}

BaseballGame();
