import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return(
			<nav>
				<p 
					onClick={() => onRouteChange('signin')}
					className='f3 h1 link dim black pa3 pointer underline'>
					Sign Out
				</p>
			</nav>
		);
	} else {
		return(
			<nav>
				<p 
					onClick={() => onRouteChange('signin')}
					className='f3 h1 link dim black pa3 pointer underline'>
					Sign In
				</p>
				<p 
					onClick={() => onRouteChange('register')}
					className='f3 h1 link dim black pa3 pointer underline'>
					Register
				</p>
			</nav>
		)
	}
}

export default Navigation;