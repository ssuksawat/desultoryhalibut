import React from 'react';

const SubscribeInput = ({currentNewTopicValue, onNewTopicChange, handleAddTopicClick}) => {
	return (
		<div className="subscription-input">
      <input
      	value={currentNewTopicValue}
      	onChange={onNewTopicChange}
        id="addTopic"
        type="text"
        placeholder="Teen Titans"
        className="validate blue-text text-darken-4"
      />
		<button className="subscription-input__submit-btn" onClick={handleAddTopicClick}><i className="material-icons center">add</i></button>
	  </div>
	);
}

export default SubscribeInput;
