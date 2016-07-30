import React from 'react';
import SubscribeListItem from './SubscribeListItem.component';

const SubscribeList = ({topics}) => {
	return (
		<div className="collection">
			{topics.map(topicName => <SubscribeListItem key={topicName} topicName={topicName}/>)}
    </div>
	);
}

export default SubscribeList;
