import React from 'react';
import SubscribeInput from './SubscribeInput.component';
import SubscribeList from './SubscribeList.component';

const Subscription = ({currentNewTopicValue, onNewTopicChange}) => {
	return (
		<div>
			<SubscribeInput
				currentNewTopicValue={currentNewTopicValue}
				onNewTopicChange={onNewTopicChange}
			/>
			<SubscribeList />
		</div>
	);
}

export default Subscription;


