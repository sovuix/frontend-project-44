import { getTheQuestion } from './getTheQuestion.js';
import { getUserName } from '../src/greeting.js';
import { getRandomNum } from './getRandomNum.js';


const guessEvenNumber = () => {
  let tryCount = 0;
  let result = false;

  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while ((tryCount < 3) && (result = true)) {
    const rand = getRandomNum();
    const even = (rand % 2 === 0);
    const notEven = (rand % 2 !== 0);

    const userAnswer = getTheQuestion(rand);
    switch (true) {
      case (even && userAnswer === 'yes'):
      case (notEven && userAnswer === 'no'):
        console.log('Correct!');
        tryCount += 1;
        break;
      case (notEven && userAnswer === 'yes'):
      case (even && userAnswer === 'no'):
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${userName}`)
        return result = true;
      default:
        console.log(`Let's try again, ${userName}`)
        return result = true;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default guessEvenNumber;
