export function TriviaQuestion({ eachQuestion }) {
  const { correct_answer, incorrect_answers, question, category } = eachQuestion;
  const fisherYates = 0.5;
  const shuffledAnswers = [...incorrect_answers, correct_answer]
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
              answer === correct_answer
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
