import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtnSettings extends Component {
  render() {
    const { handleSettings } = this.props;
    return (
      <button
        data-testid="btn-settings"
        type="button"
        onClick={ handleSettings }
      >
        Configurações
      </button>
    );
  }
}

BtnSettings.propTypes = {
  handleSettings: PropTypes.func.isRequired,
};
