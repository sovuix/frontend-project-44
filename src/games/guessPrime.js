import runGame from '../index.js';
import { getRandomNum } from '../getRandomNum.js';

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function getPrimeNum (){
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default function guessPrime () {
  runGame ('Answer "yes" if given number is prime. Otherwise answer "no".', getPrimeNum);
}

