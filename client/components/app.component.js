import React, { Component } from 'react';
import NavBar from './NavBar.component';
import TwitterChart from './TwitterChart.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: null,
        password: null,
        confirmPassword: null,
        fullName: null,
        email: null,
      },
      streams: null,
      currentNewTopicValue: null,
    };
    this.setAppStateOnChange = this.setAppStateOnChange.bind(this);
    this.login.bind(this);
    this.signup.bind(this);
    this.onNewTopicChange = this.onNewTopicChange.bind(this);
  }

  fetchTweets () {
    fetch('api/twitter') // TODO: add query for "topics" and "timeframe"
      .then(res => res.json())
      .then(dataArray => {
        let streams = {};
        dataArray.forEach(data => {
          streams[data.topic] = streams[data.topic] || [];
          streams[data.topic].push(data);
        });
        this.setState({ streams });
      })
      .catch(err => console.error('Error retrieving twitter data', err));
  }

  componentWillMount() {
    // setInterval(this.fetchTweets.bind(this), 5000);
    // this.fetchTweets();
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
      menuWidth: 500,
      edge: 'right',
      closeOnClick: true,
    });
  }

  onNewTopicChange(event) {
    this.setState({
      currentNewTopicValue: event.target.value
    });
  }

  setAppStateOnChange(event) {
    this.setState({
      login[event[target.name]]: event.target.value
    })
  }

  login() {
    if (this.state.password !== this.state.confirmPassword) {
      // for now:
      alert('Passwords do not match')
      return;
    }
    
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        this.state.login.username,
        this.state.login.password,
        
      }),
    })
      .then(response => {
        // cache the token in local storage, using the user id as the key
        window.localStorage.setItem('jwt', response.body.token);
      });
  }

  signup() {
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        this.state.login.username,
        this.state.login.password,
        this.state.login.fullName,
        this.state.login.email,
      }),
    })
      .then(response => {
        // cache the token in local storage, using the user id as the key
        window.localStorage.setItem('jwt', response.body.token);
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
          <Navbar setAppStateOnChange={ this.setAppStateOnChange }
                  loginValues={this.state.login}
                  login={ this.login }
                  signup={ this.signup }
                  currentNewTopicValue={this.state.currentNewTopicValue}
                  onNewTopicChange={this.onNewTopicChange}
        />
        </header>

        <div className="main-content">
          { charts }
        </div>
      </div>
    );
  }
}
