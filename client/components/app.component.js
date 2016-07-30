import React, { Component } from 'react';
import NavBar from './NavBar.component';
import TwitterChart from './TwitterChart.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: null,
      currentNewTopicValue: "",
      topics: ['nintendo', 'google'],
      timeframe: '1h'
    };

    this.onNewTopicChange = this.onNewTopicChange.bind(this);
  }

  fetchTweets () {
    const reqOps = {
      headers: { 'Authorization': `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzb21wb3AyIn0.-nugdkoFb2y2fLOR4ww_35_K2e39ABr8Y4rbKipJ8qI` }
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
      closeOnClick: true,
    });
  }

  onNewTopicChange(event) {
    this.setState({
      currentNewTopicValue: event.target.value
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
          <NavBar
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
