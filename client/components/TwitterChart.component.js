import React from 'react';
import { VictoryChart, VictoryLine, VictoryArea } from 'victory';

const TwitterChart = ({data, topic}) => {
  return (
    <div className="chart-card">
      <VictoryChart animate={{duration: 1000}}>
         <VictoryArea
           interpolation="cardinal"
           style={{data: {fill: "tomato"}}}
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
      <h4 style={{'textAlign': 'center'}}>{topic}</h4>
    </div>
  );
}

export default TwitterChart;