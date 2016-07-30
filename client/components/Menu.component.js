import React from 'react';
//import AuthButton from './AuthButton.component';
import Subscription from './Subscription.component';
import Login from './login.component';
import Signup from './Signup.component';

const Menu = ({currentNewTopicValue, onNewTopicChange, loginValues, login, signup}) => {
	return (
		<span>
			<a href="#" data-activates="slide-out" className="button-collapse right show-on-large"><i className="material-icons">menu</i></a>
			<ul id="slide-out" className="side-nav">
			    <li><a data-target="modal1" className="modal-action modal-close waves-effect waves-green btn-flat btn modal-trigger">Login</a></li>
			    <li><a data-target="modal2" className=" modal-action modal-close waves-effect waves-green btn-flat btn modal-trigger">Signup</a></li>
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

export default Menu;