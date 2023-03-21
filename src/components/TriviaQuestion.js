import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import '../pages/Game.css';
import { disabledButton, indexChange } from '../redux/actions';

class TriviaQuestion extends Component {
  state = {
    shuffler: true,
    questions: [],
  };

  handleClick = (answer) => {
    const { dispatch } = this.props;
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
    dispatch(disabledButton(true));
  };

  shufflerCondition = () => {
    const { eachQuestion } = this.props;
    const { shuffler, questions } = this.state;
    const correctAnswer = eachQuestion.correct_answer;
    const incorrectAnswers = eachQuestion.incorrect_answers;
    const fisherYates = 0.5;
    if (shuffler) {
      const shuffledAnswers = [...incorrectAnswers, correctAnswer]
        .sort(() => Math.random() - fisherYates);
      this.setState({
        questions: shuffledAnswers,
        shuffler: false,
      });
      return shuffledAnswers;
    } return questions;
  };

  nextIndex = () => {
    const { dispatch, index } = this.props;
    const four = 4;
    const buttons = document.querySelectorAll('.answer-button');
    dispatch(indexChange(index + 1));
    dispatch(disabledButton(false));
    if (index === four) { dispatch(indexChange(index)); }
    this.setState({
      shuffler: true,
    });
    buttons.forEach((element) => {
      element.className = 'answer-button';
    });
  };

  render() {
    const correct = 'correct-answer';
    const { eachQuestion, isDisabled } = this.props;
    if (!eachQuestion) {
      return (<p>Error</p>);
    }
    const { question, category } = eachQuestion;
    const correctAnswer = eachQuestion.correct_answer;
    const shuffledAnswers = this.shufflerCondition();
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
        </div>
        {
          isDisabled
        && <button
          data-testid="btn-next"
          onClick={ this.nextIndex }
        >
          Next
        </button>
        }
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
  index: state.game.indexQuestions,
});

export default connect(mapStateToProps)(TriviaQuestion);
