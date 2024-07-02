import readlineSync from 'readline-sync';
import { getUserName } from '../src/greeting.js';
import { getRandomNum } from './getRandomNum.js';
import { getTheQuestion } from './getTheQuestion.js';

const getShuffle = (arr) => {
  let j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
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
  
    // const shuffle = getShuffle(operator);
    const expression = `${num1}${shuffle[tryCount]}${num2}`;


    const userAnswer = getTheQuestion(expression);
    console.log(expression);
    
    switch (true) {
      case (parseInt(userAnswer) === parseInt(expression)):
        console.log('Correct!');
        tryCount += 1;
        break;
      case (parseInt(userAnswer) !== parseInt(expression)):
        console.log(`${parseInt(userAnswer)} is wrong answer ;(. Correct answer was ${parseInt(expression)}.`);
        console.log(`Let's try again, ${userName}`)
        return result = true;
      default:
        console.log(`Let's try again, ${userName}`)
        return result = true;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
  


