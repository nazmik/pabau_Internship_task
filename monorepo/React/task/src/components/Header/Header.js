import React from 'react';

function Header({ currentStep }) {
	return (
		<header>
			<h3>Chose Service</h3>
			<p className="text-unfocused">{currentStep}</p>
		</header>
	);
}

export default Header;
