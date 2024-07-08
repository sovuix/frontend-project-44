import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

function getProgression(firstElement, step, length = 10) {
  const arr = [];
  arr[0] = firstElement;

  for (let i = 1; i <= length; i += 1) {
    arr[i] = arr[i - 1] + step;
  }

  return arr;
}

function hideEle() {
  const firstElement = getRandomNum(0, 30);
  const step = getRandomNum(2, 6);
  const arr = getProgression(firstElement, step);
  const hideElement = getRandomNum(0, arr.length);

  const correctAnswer = arr[hideElement];
  arr[hideElement] = '..';
  const question = arr.join(' ');

  return [question, String(correctAnswer)];
}

export default function guessProgression() {
  runGame('What number is missing in the progression?', hideEle);
}
