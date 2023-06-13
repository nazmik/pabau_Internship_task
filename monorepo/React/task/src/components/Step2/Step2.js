import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Step2.module.css';

const Step2 = ({ setCurrentStep }) => {
	const location = useLocation();
	const optionName = location.state;

	const handleGoBack = () => {
		setCurrentStep('1/2');
	};

	return (
		<div className={styles.main}>
			<h3>Selected Option: {optionName}</h3>
			<Link to="/" onClick={handleGoBack}>
				&larr; Go Back
			</Link>
		</div>
	);
};

export default Step2;
