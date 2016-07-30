import React from 'react';
import SubscribeListItem from './SubscribeListItem.component';

const SubscribeList = ({topics, onRemoveTopic}) => {
	return (
		<div className="collection">
			{topics.map(topicName => <SubscribeListItem key={topicName} topicName={topicName} onRemoveTopic={onRemoveTopic}/>)}
    </div>
	);
}

export default SubscribeList;
