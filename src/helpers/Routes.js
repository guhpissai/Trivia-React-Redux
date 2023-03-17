import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Login from '../pages/Login';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/game" component={ Game } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}
