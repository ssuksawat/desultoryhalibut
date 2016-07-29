import React, { Component } from 'react';
import Menu from './Menu.component';
import Subscription from './Subscription.component';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <nav className="nav-wrapper">
          <a className="app-logo" href="#">Sidestreet Analytics</a>
          <Menu
            currentNewTopicValue={this.props.currentNewTopicValue}
            onNewTopicChange={this.props.onNewTopicChange}
          />
        </nav>
    );
  }
}