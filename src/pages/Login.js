import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newQuestions } from '../redux/actions';
import { getTriviaToken, getTriviaQuestions } from '../services/apiTrivia';
import { SET_LOCAL_STORAGE } from '../helpers/localstorage';
import logo from '../trivia.png';
import '../App.css';

class Login extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { history, dispatch } = this.props;
    const response = await getTriviaToken();
    SET_LOCAL_STORAGE('token', response.token);
    const questions = await getTriviaQuestions(response.token);
    dispatch(newQuestions(questions));
    history.push('/game');
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <form>
            <label>
              <input
                type="text"
                value={ name }
                onChange={ this.handleChange }
                name="name"
                data-testid="input-player-name"

              />
            </label>
            <label>
              <input
                type="email"
                value={ email }
                onChange={ this.handleChange }
                name="email"
                data-testid="input-gravatar-email"
              />
            </label>
            <button
              type="button"
              disabled={ name === '' || email === '' }
              data-testid="btn-play"
              onClick={ this.handleClick }
            >
              Play
            </button>
          </form>
        </header>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Login);
