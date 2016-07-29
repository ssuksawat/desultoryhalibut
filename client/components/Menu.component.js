import React from 'react';
//import AuthButton from './AuthButton.component';
import Subscription from './Subscription.component';

const Menu = ({currentNewTopicValue, onNewTopicChange}) => {
	return (
		<span>
			<a href="#" data-activates="slide-out" className="button-collapse right show-on-large"><i className="material-icons">menu</i></a>
			<ul id="slide-out" className="side-nav">
			    <li><a>Login</a></li>
			    <li><a>Signup</a></li>
			    <li><a><div className="divider"></div></a></li>
			    <li><a className="subheader">Subscription stuff:</a></li>
			    <li>
			    	<Subscription 
			    		currentNewTopicValue={currentNewTopicValue}
			    		onNewTopicChange={onNewTopicChange}
			    	/>
			    </li>
			</ul>
		</span>
	);
}

