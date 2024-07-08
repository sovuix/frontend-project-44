import readlineSync from 'readline-sync';

const getTheQuestion = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer ');
  return userAnswer;
};
export default getTheQuestion;
