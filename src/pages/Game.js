import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    const { questions: { results } } = this.props;
    return (
      <>
        { results.map((question, index) => <p key={ index }>{ question.question }</p>) }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf.string),
}.isRequired;

export default connect(mapStateToProps)(Game);
