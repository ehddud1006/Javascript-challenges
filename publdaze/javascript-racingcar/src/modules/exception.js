import {
  MIN_RACING_NUMBER,
  MAX_RACING_NUMBER,
  MAX_CAR_NAME_LENGTH,
} from './constant.js';

const ExceptionCase = {
  NUMBER_FORMAT_EXCEPTION: Symbol('입력값은 숫자로만 구성되어야합니다.'),
  RANGE_EXCEPTION: Symbol(
    `${MIN_RACING_NUMBER}~${MAX_RACING_NUMBER} 사이의 값을 넣어주세요.`,
  ),
  LENGTH_EXCEPTION: Symbol(
    `${MAX_CAR_NAME_LENGTH}자 이하의 이름을 넣어주세요.`,
  ),
  EXIST_EXCEPTION: Symbol('입력 값이 없습니다.'),
  DUPLICATION_EXCEPTION: Symbol('중복된 이름이 있으면 안됩니다.'),
  NOTHING: Symbol(''),
};
Object.freeze(ExceptionCase);

export default ExceptionCase;
