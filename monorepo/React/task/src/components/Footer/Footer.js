import React from 'react';
import logo from '../../images/pab-logo.png';
import styles from './Footer.module.css';

function Footer() {
	return (
		<div>
			<p className="text-unfocused">
				Not sure about Consultation type?Please, call{' '}
				<a href="#" className={styles.link}>
					0203 7959063
				</a>
			</p>
			<p>
				Powered By <img src={logo} alt="Pabau Icon" className={styles.logo} /> Pabau
			</p>
		</div>
	);
}

export default Footer;
