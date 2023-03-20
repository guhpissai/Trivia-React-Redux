import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../Game.css';

export class TriviaQuestion extends Component {
  handleClick = (answer) => {
    const correct = 'correct-answer answer-button';
    const wrong = 'wrong-answer answer-button';
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((element) => {
      if (element.value === answer) {
        element.className = correct;
      } else {
        element.className = wrong;
      }
    });
  };

  render() {
    const correct = 'correct-answer';
    const { eachQuestion } = this.props;
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
        <div className="buttons-container">
          {shuffledAnswers.map((answer, index) => (
            <li key={ index } data-testid="answer-options">
              <button
                className="answer-button"
                onClick={ () => this.handleClick(correctAnswer) }
                value={ answer }
                data-testid={
                  answer === correctAnswer
                    ? correct
                    : `wrong-answer-${index}`
                }
              >
                { answer }
              </button>
            </li>
          ))}
        </div>
      </>
    );
  }
}

TriviaQuestion.propTypes = {
  eachQuestion: PropTypes.shape({
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
  }),
}.isRequired;
