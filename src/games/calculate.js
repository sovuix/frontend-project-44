import runGame from '../index.js';
import { getRandomNum } from '../getRandomNum.js';

const operator = ['+', '-', '*'];

const getShuffle = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

function getExpressionNum() {
  const shuffle = getShuffle(operator);
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const randPosition = getRandomNum(0,2);
  const question = `${num1} ${shuffle[randPosition]} ${num2}`;
  let correctAnswer;

  switch(shuffle[randPosition]) {
    case '+' :
      correctAnswer = num1 + num2;
      break;
    case '-' :
      correctAnswer = num1 - num2;
      break;
    case '*' :
      correctAnswer = num1 * num2;
      break;
  }

  return [question, String(correctAnswer)];
}

export default function calculate () {
  runGame ('What is the result of the expression?', getExpressionNum)
}



