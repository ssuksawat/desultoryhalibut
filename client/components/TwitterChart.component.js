import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryAxis, VictoryArea } from 'victory';

const NORMALIZE_OFFSET = 5;

export default class TwitterChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data.map((obj, index) => {
      return {
        time: index,
        numTweets: obj.volume,
        sentimentAverage: obj.score * NORMALIZE_OFFSET
      };
    });

    return (
      <div className="chart-card">
        <VictoryChart animate={{duration: 2000}}>
           <VictoryArea
             interpolation="cardinal"
             style={{ data: {fill: "tomato"}}}
             data={data}
             x={"time"}
             y={"numTweets"}
           />

          <VictoryLine
            interpolation="cardinal"
            style={{
              data: {
                stroke: "cornflowerblue",
                strokeWidth: 5
              },
              labels: {fontSize: 8}
            }}
            data={data}
            x={"time"}
            y={"sentimentAverage"}
            label="Sentiment Score"
            standalone={false}
            fill={"teal"}
          />
        </VictoryChart>
        <h4 style={{'textAlign': 'center'}}>{this.props.topic}</h4>
      </div>
    )
  }
}
