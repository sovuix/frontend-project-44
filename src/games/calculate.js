import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const operator = ['+', '-', '*'];

const getShuffle = (arr) => {
  let j;
  let temp;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    let arrI = arr[i];
    let arrJ = arr[j];
    temp = arrJ;
    arrJ = arrI;
    arrI = temp;
  }
  return arr;
};

function getExpressionNum() {
  const shuffle = getShuffle(operator);
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const randPosition = getRandomNum(0, 2);
  const question = `${num1} ${shuffle[randPosition]} ${num2}`;
  let correctAnswer;

  switch (shuffle[randPosition]) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }

  return [question, String(correctAnswer)];
}

export default function calculate() {
  runGame('What is the result of the expression?', getExpressionNum);
}
