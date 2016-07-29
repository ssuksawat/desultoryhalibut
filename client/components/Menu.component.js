import React from 'react';
//import AuthButton from './AuthButton.component';
//import Subscription from './Subscription.component';


// Initialize collapse button
// $(".button-collapse").sideNav(); <~~~~~~~~~~~ Goes in App?

const Menu = (props) => {
	return (
		<div>
			<ul id="slide-out" class="side-nav">
			    <li>AuthButton</li>
			    <li><div class="divider"></div></li>
			    <li><a class="subheader">Subscription stuff:</a></li>
			    <li>Subscription</li>
			</ul>
			<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
		</div>
	);
}

