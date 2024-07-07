import runGame from '../index.js';
import { getRandomNum } from '../getRandomNum.js';

function findNod(num1, num2) {
  let a = num1;
  let b = num2;

  while (a != 0 & b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
}

function getNodGame() {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const question = `${num1} ${num2}`;
  const correctAnswer = findNod(num1, num2);

  return [question, String(correctAnswer)];
}

export default function guessNod() {
  runGame('Find the greatest common divisor of given numbers', getNodGame)
}