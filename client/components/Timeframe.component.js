import React from 'react';

const Timeframe = ({ onTimeClick, timeframe }) => {
  let timeLabel;

  switch (timeframe) {
    case '1h': timeLabel = '1 hour'; break;
    case '12h': timeLabel = '12 hours'; break;
    case '1d': timeLabel = '1 day'; break;
    default: timeLabel = '1 day';
  }

  return (
    <div className="time-bar">
      <div className="time-bar__toggle">
        <i className="material-icons left">timelapse</i>
        <span className="time-bar__toggle-label">Time Range: </span>
        <a className="dropdown-button btn-flat" href="#" data-activates="time-dropdown">
          { timeLabel }
        </a>
      </div>

      <ul id="time-dropdown" className="dropdown-content">
        <li><a href="#" onClick={() => onTimeClick('1h')}>1 hour</a></li>
        <li><a href="#" onClick={() => onTimeClick('12h')}>12 hours</a></li>
        <li><a href="#" onClick={() => onTimeClick('1d')}>1 day</a></li>
      </ul>
    </div>
  );
}

export default Timeframe;
