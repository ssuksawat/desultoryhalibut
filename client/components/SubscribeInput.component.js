import React from 'react';

const SubscribeInput = ({currentNewTopicValue, onNewTopicChange}) => {
	return (
		<div className="row">
			<a className="col s3 waves-effect waves-light btn left"><i className="material-icons center">add</i>button</a>
	    <div className="input-field col s8">
	      <input 
	      	value={currentNewTopicValue}
	      	onChange={onNewTopicChange}
	        id="addTopic"
	        type="text"
	        placeholder="Teen Titans"
	        className="validate blue-text text-darken-4"
	      />
	    </div>
	  </div>
	);
}
//	      <label for="addTopic">First Name</label>

export default SubscribeInput;
