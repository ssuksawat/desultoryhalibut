import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import AppComponent from './components/app.component';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={AppComponent} />
    </Router>
  ), document.getElementById('mainstreet'));
});

// React.createElement(AppComponent),
