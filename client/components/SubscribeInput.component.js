import React from 'react';

const SubscribeInput = ({currentNewTopicValue, onNewTopicChange, handleAddTopicClick}) => {
	return (
		<div className="row">
			<a className="col s3 waves-effect waves-light btn left" onClick={handleAddTopicClick}><i className="material-icons center">add</i></a>
	    <div className="input-field col s8">
	      <input 
	      	value={currentNewTopicValue}
	      	onChange={onNewTopicChange}
	        id="addTopic"
	        type="text"
	        placeholder="Teen Titans"
	        className="validate blue-text text-darken-4"
	      />
	      <label className="active" htmlFor="addTopic">New Topic</label>
	    </div>
	  </div>
	);
}

export default SubscribeInput;
