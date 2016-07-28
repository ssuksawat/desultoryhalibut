import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <nav className="nav-wrapper">
          <a className="app-logo" href="#">Sidestreet Analytics</a>
        </nav>
    );
  }
}
