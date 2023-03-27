import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TriviaQuestion from '../components/TriviaQuestion';
import Header from '../components/Header';
import '../Game.css';

class Game extends Component {
  componentDidMount() {
    this.tokenCheck();
  }

  tokenCheck = () => {
    const { history, questions } = this.props;
    const responseCode = questions.response_code;
    const invalidToken = 3;
    if (responseCode === invalidToken) {
      localStorage.clear('token');
      history.push('/');
    }
  };

  render() {
    const { questions, index, history } = this.props;
    console.log(questions, index);
    const first = questions.results[index];
    return (
      <div className="background-game">
        <section className="interface">
          <Header />
          <div className="game">
            <TriviaQuestion eachQuestion={ first } history={ history } />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
  index: state.game.indexQuestions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf.string),
}.isRequired;

export default connect(mapStateToProps)(Game);
