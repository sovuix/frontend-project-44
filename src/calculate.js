import { getUserName } from '../src/greeting.js';
import { getRandomNum } from './getRandomNum.js';
import { getTheQuestion } from './getTheQuestion.js';

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

export const calc = () => {
  let tryCount = 0;
  let result = false;
  const operator = ['+', '-', '*'];
  const shuffle = getShuffle(operator);

  const userName = getUserName();
  console.log('What is the result of the expression?');

  while ((tryCount < 3) && (result = true)) {
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const expression = `${num1} ${shuffle[tryCount]} ${num2}`;
    const userAnswer = parseInt(getTheQuestion(expression));

    switch (shuffle[tryCount]) {
      case '+':
        if (userAnswer === (num1 + num2)) {
          console.log('Correct!');
          tryCount += 1;
          break;
        } else {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${num1 + num2}.`);
          console.log(`Let's try again, ${userName}`);
          return result = true;
        }
      case '-':
        if (userAnswer === (num1 - num2)) {
          console.log('Correct!');
          tryCount += 1;
          break;
        } else {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${num1 - num2}.`);
          console.log(`Let's try again, ${userName}`);
          return result = true;
        }
      case '*':
        if (userAnswer === (num1 * num2)) {
          console.log('Correct!');
          tryCount += 1;
          break;
        } else {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${num1 * num2}.`);
          console.log(`Let's try again, ${userName}`);
          return result = true;
        }
      default:
        console.log(`Let's try again, ${userName}`);
        return result = true;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}


