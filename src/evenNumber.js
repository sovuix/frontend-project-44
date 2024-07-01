
import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const guessEvenNumber = () => {
  const userName = getUserName();
  let tryCount = 0;
  let result = false;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while ((tryCount < 3) && (result = true)) {
    const rand = Math.floor(Math.random() * 100);
    const even = (rand % 2 === 0);
    const notEven = (rand % 2 !== 0);

    console.log(`Question: ${rand}`);
    const userAnswer = readlineSync.question('Your answer ');

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
  console.log(`Congratulations, ${userName}`);
}

export { getUserName };
export { guessEvenNumber };
