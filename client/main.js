import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import AppComponent from './components/app.component';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$.velocity = require('velocity-animate');

/* Style Imports */
import 'materialize-css';
import 'materialize-css/sass/materialize.scss';
import './main.scss';


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={AppComponent} />
    </Router>
  ), document.getElementById('mainstreet'));
});
