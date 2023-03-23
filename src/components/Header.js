import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import '../Header.css';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, userName, score } = this.props;
    const hash = md5(email).toString();
    return (
      <div className="header-background">
        <section className="header">
          <div className="profile">
            <img
              data-testid="header-profile-picture"
              src={ `https://www.gravatar.com/avatar/${hash}` }
              alt="Imagem do Usuario"
            />
            <p data-testid="header-player-name">
              {userName}
            </p>
          </div>
          <div className="score">
            <p>Score</p>
            <p data-testid="header-score">{ score }</p>
          </div>
        </section>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,

};

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  userName: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
