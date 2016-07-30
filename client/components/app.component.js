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
      topics: ['Squirrels', 'Distributed Computing', 'Internet of Things'],
    };

    this.onNewTopicChange = this.onNewTopicChange.bind(this);
    this.handleAddTopicClick = this.handleAddTopicClick.bind(this);
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
    console.log(newTopic);
    fetch('api/topic/add', {
      method: 'POST',
      headers: {  
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
    .then(res => res.json())
    .then(res => {

      console.log('hi');
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
