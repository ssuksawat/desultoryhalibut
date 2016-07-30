import React from 'react';
import SubscribeInput from './SubscribeInput.component';
import SubscribeList from './SubscribeList.component';

const Subscription = ({currentNewTopicValue, onNewTopicChange, topics, handleAddTopicClick}) => {
	return (
		<div>
			<SubscribeInput
				currentNewTopicValue={currentNewTopicValue}
				onNewTopicChange={onNewTopicChange}
				handleAddTopicClick={handleAddTopicClick}
			/>
			<SubscribeList topics={topics}/>
		</div>
	);
}

export default Subscription;
