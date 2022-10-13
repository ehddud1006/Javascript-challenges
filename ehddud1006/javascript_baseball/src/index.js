const randomNumberGenerator = () => {
  const randomNumberList = [];
  while (randomNumberList.length < 3) {
    // eslint-disable-next-line no-undef
    const N = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumberList.includes(N)) {
      randomNumberList.push(N);
    }
  }
  return randomNumberList;
};

const isRightLength = (num) => {
  return num.length === 3;
};
const hasDuplicatedNumbers = (num) => {
  return new Set(num).size !== num.length;
};

const hasZero = (num) => {
  return num.indexOf('0') !== -1;
};

const isNumeric = (num) => {
  return !Number.isNaN(Number(num));
};

const isValidNumbers = (num) => {
  return !hasDuplicatedNumbers(num) && !hasZero(num) && isRightLength(num) && isNumeric(num);
};

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

const generateResultMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    return '낫싱';
  }
  if (strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0) {
    return `${strikeCount}스트라이크`;
  }
  return `${ballCount}볼 ${strikeCount}스트라이크`;
};

export default function BaseballGame() {
  const submitButton = document.querySelector('#submit');
  const userInput = document.querySelector('#user-input');
  const resultContainer = document.querySelector('#result');
  const randomNumberList = randomNumberGenerator();

  console.log(randomNumberList);
  const play = (computerInputNumbers, userInputNumbers) => {
    const [strikeCount, ballCount] = strikeBallJudgment(computerInputNumbers, userInputNumbers);
    if (strikeCount === 3) {
      return `<p>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</p>`;
    }
    return generateResultMessage(strikeCount, ballCount);
  };

  const resultProvider = (message) => {
    resultContainer.innerHTML = message;
  };

  const gameStart = (e) => {
    e.preventDefault();
    if (isValidNumbers(userInput.value)) {
      const userInputNumber = userInput.value.split('').map((v) => +v);
      play(randomNumberList, userInputNumber);
      const resultMessage = play(randomNumberList, userInputNumber);
      resultProvider(resultMessage);
    } else {
      alert('🙅 1~9까지의 수를 중복없이 3개 작성해주세요!');
      userInput.value = '';
    }
  };

  const init = () => {
    submitButton.addEventListener('click', (e) => gameStart(e));
    userInput.addEventListener('keydown', (e) => {
      if (e.keyCode === 'Enter' || e.isComposing) {
        gameStart(e);
      }
    });
  };

  init();
}

BaseballGame();
