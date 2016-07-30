import React from 'react';
//import AuthButton from './AuthButton.component';
import Subscription from './Subscription.component';

const Menu = ({currentNewTopicValue, onNewTopicChange, topics, handleAddTopicClick}) => {
	return (
		<ul id="slide-out" className="side-nav">
		    <li><a>Login</a></li>
		    <li><a>Signup</a></li>
		    <li><a><div className="divider"></div></a></li>
		    <li><a className="subheader">Subscription stuff:</a></li>
		    <li>
		    	<Subscription 
		    		currentNewTopicValue={currentNewTopicValue}
		    		onNewTopicChange={onNewTopicChange}
		    		handleAddTopicClick={handleAddTopicClick}
		    		topics={topics}
		    	/>
		    </li>
		</ul>
	);
}

export default Menu;
