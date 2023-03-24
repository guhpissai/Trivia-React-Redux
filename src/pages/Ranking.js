import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Ranking extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const rankingsLocalStorage = (JSON.parse(localStorage.getItem('Ranking'))) || [];
    console.log(rankingsLocalStorage);
    return (
      <div>
        <div data-testid="ranking-title">Ranking</div>
        {rankingsLocalStorage.sort((a, b) => b.score - a.score).map((player, index) => (
          <section key={ index }>
            <div>
              <img
                data-testid="header-profile-picture"
                src={ `https://www.gravatar.com/avatar/${md5(player.email).toString()}` }
                alt="Imagem do Usuario"
              />
              <p data-testid={ `player-name-${index}` }>
                { player.userName }
              </p>
              <p>Score</p>
              <p data-testid={ `player-score-${index}` }>
                { player.score }
              </p>
            </div>
          </section>
        ))}
        <button
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Jogar Novamente
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  userName: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Ranking);
