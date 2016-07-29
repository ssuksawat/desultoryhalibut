import React, { Component } from 'react';
import { Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <nav className="navbar navbar-fixed-top navbar-dark bg-primary">

            <div className="container">
              <a className="navbar-brand" href="/">Sidestreet Analytics</a>
              <ul className="nav navbar-nav">
                <li className="nav-item"></li>
              </ul>
            </div>

        </nav>
    );
  }
}
