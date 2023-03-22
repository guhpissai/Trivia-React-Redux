import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Login from '../pages/Login';
import Config from '../pages/Config';
import Feedback from '../pages/Feedback';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/game" component={ Game } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/config" component={ Config } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}
