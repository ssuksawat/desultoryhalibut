import React, { Component } from 'react';
import Navbar from './Navbar.component';
import TwitterChart from './Twitter.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: null
    };
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
          <Navbar />
        </header>

        <div className="main-content">
          { charts }
        </div>
      </div>
    );
  }
}
