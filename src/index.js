import readlineSync from 'readline-sync';

import { getUserName } from './greeting.js';

export default function runGame(rules, callback) {
  const userName = getUserName();
  console.log(rules);
  let tryCount = 3;

  for (let i = 0; i < tryCount; i += 1) {
    const [question, correctAnswer] = callback();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      if(i === 2) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      break;
    }
  }

  
}