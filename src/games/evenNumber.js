import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const isEven = (num) => num % 2 === 0;

function evenGame() {
  const question = getRandomNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default function guessEvenNumber() {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
}
