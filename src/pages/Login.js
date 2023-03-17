import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTriviaToken } from '../services/apiTrivia';
import { SET_LOCAL_STORAGE } from '../helpers/localstorage';
import logo from '../trivia.png';
import '../App.css';
import BtnSettings from '../helpers/BtnSettings';

export default class Login extends Component {
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
    const { history } = this.props;
    const response = await getTriviaToken();
    console.log(typeof (response.token));
    SET_LOCAL_STORAGE(response.token);
    history.push('/game');
  };

  handleSettings = () => {
    const { history } = this.props;
    history.push('/config');
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
            <BtnSettings handleSettings={ this.handleSettings } />
          </form>
        </header>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
