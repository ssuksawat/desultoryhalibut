import React from 'react';
import Subscription from './Subscription.component';
import Login from './login.component';
import Signup from './Signup.component';

const Menu = ({currentNewTopicValue, onNewTopicChange, topics, handleAddTopicClick, loginValues, login, signup}) => {
	return (
		<ul id="slide-out" className="side-nav">
		    <li><a data-target="modal1" className="modal-action modal-close waves-effect waves-green btn-flat btn modal-trigger login-btn">Login</a></li>
		    <li className="signup-section">
					<span>Don't have an account? </span><a data-target="modal2" className="modal-action modal-close modal-trigger">Signup</a></li>
		    <li><div className="divider"></div></li>
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
