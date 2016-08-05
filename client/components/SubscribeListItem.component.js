import React from 'react';

const SubscribeListItem = ({topicName, onRemoveTopic}) => {
	return (
		<a href="#!" className="collection-item subscription-item" onClick={() => onRemoveTopic(topicName)}>
			<span>{topicName}</span>
			<i className="material-icons">close</i>
		</a>
	);
}

export default SubscribeListItem;
