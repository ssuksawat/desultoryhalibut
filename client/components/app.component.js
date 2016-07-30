import React, { Component } from 'react';
import NavBar from './NavBar.component';
import Menu from './Menu.component';
import TwitterChart from './TwitterChart.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: null,
      currentNewTopicValue: '',
      topics: ['google', 'Distributed Computing', 'Internet of Things'],
      timeframe: '1h'
    };

    this.onNewTopicChange = this.onNewTopicChange.bind(this);
    this.handleAddTopicClick = this.handleAddTopicClick.bind(this);
  }

  fetchTweets () {
    const reqOps = {
      headers: { 'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0ZXMifQ.6D4AjQEEqPhomiUJyHWA6dp_Ffkzzje9yu4ffrPbZG4` }
    };
    const topicQuery = this.state.topics.map(topic => `topics=${topic}`).join('&');
    fetch(`api/twitter?${topicQuery}&timeframe=${this.state.timeframe}`, reqOps)
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
  }

  onNewTopicChange(event) {
    this.setState({
      currentNewTopicValue: event.target.value,
    });
  }

  handleAddTopicClick(event) {
    const newTopic = this.state.currentNewTopicValue;
    fetch('api/topic/add', {
      method: 'POST',
      headers: { 
        'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0ZXMifQ.6D4AjQEEqPhomiUJyHWA6dp_Ffkzzje9yu4ffrPbZG4`,
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
          <NavBar />
        </header>
        <Menu
          currentNewTopicValue={this.state.currentNewTopicValue}
          onNewTopicChange={this.onNewTopicChange}
          handleAddTopicClick={this.handleAddTopicClick}
          topics={this.state.topics}
        />

        <div className="main-content">
          { charts }
        </div>
      </div>
    );
  }
}
