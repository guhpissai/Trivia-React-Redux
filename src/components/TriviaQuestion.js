import PropTypes from 'prop-types';

export function TriviaQuestion({ eachQuestion }) {
  if (!eachQuestion) {
    return (<p>Error</p>);
  }
  const { question, category } = eachQuestion;
  const correctAnswer = eachQuestion.correct_answer;
  const incorrectAnswers = eachQuestion.incorrect_answers;
  const fisherYates = 0.5;
  const shuffledAnswers = [...incorrectAnswers, correctAnswer]
    .sort(() => Math.random() - fisherYates);
  return (
    <>
      <h3 data-testid="question-category">
        {category}
      </h3>
      <h2 data-testid="question-text">
        {question}
      </h2>
      {shuffledAnswers.map((answer, index) => (
        <li key={ index } data-testid="answer-options">
          <button
            data-testid={
              answer === correctAnswer
                ? 'correct-answer'
                : `wrong-answer-${index}`
            }
          >
            { answer }
          </button>
        </li>
      ))}
    </>
  );
}

TriviaQuestion.propTypes = {
  eachQuestion: PropTypes.shape({
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
  }),
}.isRequired;
