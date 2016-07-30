import React from 'react';
import Subscription from './Subscription.component';
import Login from './login.component';
import Signup from './Signup.component';

const Menu = ({currentNewTopicValue, onNewTopicChange, topics, handleAddTopicClick, loginValues, login, signup}) => {
	return (
		<ul id="slide-out" className="side-nav">
		    <li><a data-target="modal1" className="modal-action modal-close waves-effect waves-green btn-flat btn modal-trigger">Login</a></li>
		    <li><a data-target="modal2" className=" modal-action modal-close waves-effect waves-green btn-flat btn modal-trigger">Signup</a></li>
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

