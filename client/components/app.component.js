import React, { Component } from 'react';
import Navbar from './NavBar.component';
import Menu from './Menu.component';
import TwitterChart from './TwitterChart.component';
import Login from './login.component';
import Signup from './Signup.component';
import Timeframe from './Timeframe.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        email: '',
      },
      streams: '',
      currentNewTopicValue: '',
      topics: ['google', 'nintendo'],
      timeframe: '1h'
    };
    this.setAppStateOnChange = this.setAppStateOnChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.onNewTopicChange = this.onNewTopicChange.bind(this);
    this.handleAddTopicClick = this.handleAddTopicClick.bind(this);
    this.onTimeClick = this.onTimeClick.bind(this);
  }

  fetchTweets() {
    const topicQuery = this.state.topics.map(topic => `topics=${topic}`).join('&');
    fetch(`api/twitter?${topicQuery}&timeframe=${this.state.timeframe}`)
      .then(res => res.json())
      .then(dataArray => {
        let streams = {};
        dataArray.forEach(data => {
          streams[data.topicname] = streams[data.topicname] || [];
          streams[data.topicname].push(data);
        });
        this.setState({ streams });
      })
      .catch(err => console.error('Error retrieving twitter data', err));
  }

  componentWillMount() {
    setInterval(this.fetchTweets.bind(this), 5000);
    this.fetchTweets();
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
      menuWidth: 500,
      edge: 'right',
      closeOnClick: false,
    });
    $(".modal-trigger").leanModal()
    $('.dropdown-button').dropdown();
  }

  onNewTopicChange(event) {
    this.setState({
      currentNewTopicValue: event.target.value,
    });
  }

  setAppStateOnChange(event) {
    var newLoginState = this.state.login;
    newLoginState[event.target.name] = event.target.value;
    this.setState({
      login: newLoginState,
    });
  }

  login() {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
      }),
    })
    .then(res => res.json())
    .then(body => {
      // cache the token in local storage, using the user id as the key
      window.localStorage.setItem('jwt', body.token);
    })
  }

  signup() {
    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
        fullName: this.state.login.fullName,
        email: this.state.login.email,
      }),
    })
    .then(res => res.json())
    .then(body => {
      // cache the token in local storage, using the user id as the key
      window.localStorage.setItem('jwt', body.token);
    });
  }

  handleAddTopicClick(event) {
    const newTopic = this.state.currentNewTopicValue;
    fetch('api/topic/add', {
      method: 'POST',
      headers: {
        'Authorization': `JWT ${window.localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        topic: newTopic,
      })
    })
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Something went wrong *Shrug*');
      }
      return res;
    })
    .then(() => {
      this.setState({
        topics: this.state.topics.concat(newTopic),
      })
    })
    .catch(err => console.error(err));
  }

  onTimeClick(timeframe) {
    this.setState({
      timeframe: timeframe || '1h'
    });
  }

  render() {
    let charts;
    if (this.state.streams) {
      charts = Object.keys(this.state.streams).map(topic => {
        return <TwitterChart key={topic} topic={topic} data={this.state.streams[topic]} />
      });
    }

    return (
      <div>
        <header>
          <Navbar
            currentNewTopicValue={ this.state.currentNewTopicValue }
            onNewTopicChange={ this.onNewTopicChange }
          />
        </header>
          <Login
            loginValues={ this.state.login }
            login={ this.login }
            setAppStateOnChange={ this.setAppStateOnChange }
          />
          <Signup
            loginValues={ this.state.login }
            signup={ this.signup }
            setAppStateOnChange={ this.setAppStateOnChange }
          />
        <Menu
          currentNewTopicValue={this.state.currentNewTopicValue}
          onNewTopicChange={this.onNewTopicChange}
          handleAddTopicClick={this.handleAddTopicClick}
          topics={this.state.topics}
        />

        <Timeframe onTimeClick={ this.onTimeClick } timeframe={ this.state.timeframe } />

        <div className="main-content">
          { charts }
        </div>
      </div>
    );
  }
}
