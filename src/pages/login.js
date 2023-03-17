import React, { Component } from 'react';

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

  render() {
    const { name, email } = this.state;
    return (
      <div>
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
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}
