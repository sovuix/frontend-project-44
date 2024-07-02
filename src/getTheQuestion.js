import readlineSync from 'readline-sync';

export const getTheQuestion = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer ');
  return userAnswer;
}