import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import '../pages/Game.css';

class TriviaQuestion extends Component {
  state = {
    nextButton: false,
  };

  handleClick = (answer) => {
    const correct = 'correct-answer';
    const wrong = 'wrong-answer';
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((element) => {
      if (element.value === answer) {
        element.className = correct;
      } else {
        element.className = wrong;
      }
    });
    this.setState({
      nextButton: true,
    });
  };

  render() {
    const { nextButton } = this.state;
    const correct = 'correct-answer';
    const { eachQuestion, isDisabled } = this.props;
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
        <Timer />
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
                disabled={ isDisabled }
              >
                { answer }
              </button>
            </li>
          ))}
          { nextButton && <button data-testid="btn-next">Next</button> }
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

const mapStateToProps = (state) => ({
  isDisabled: state.game.isDisabled,
});

export default connect(mapStateToProps)(TriviaQuestion);
