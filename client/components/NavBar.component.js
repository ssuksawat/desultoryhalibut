import React, { Component } from 'react';
import Subscription from './Subscription.component';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <nav className="nav-wrapper">
          <a className="app-logo" href="#">Sidestreet Analytics</a>
          <a href="#" data-activates="slide-out" className="button-collapse right show-on-large"><i className="material-icons">menu</i></a>
        </nav>
    );
  }
}