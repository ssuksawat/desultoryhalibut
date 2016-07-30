import React, { Component } from 'react';
import Navbar from './NavBar.component';
import TwitterChart from './TwitterChart.component';
import Login from './login.component';
import Signup from './signup.component';

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
    };
    this.setAppStateOnChange = this.setAppStateOnChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
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

    $(".modal-trigger").leanModal()
  }



  onNewTopicChange(event) {
    this.setState({
      currentNewTopicValue: event.target.value
    });
  }

  onUsernameChange(event) {
    var newLoginState = this.state.login;
    newLoginState.username = event.target.value;
    this.setState({
      login: newLoginState
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
    if (this.state.password !== this.state.confirmPassword) {
      // for now:
      alert('Passwords do not match')
      return;
    }
    

    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
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
        username: this.state.login.username,
        password: this.state.login.password,
        fullName: this.state.login.fullName,
        email: this.state.login.email,
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
          <div className="main-content">
            { charts }
          </div>
      </div>
    );
  }
}
