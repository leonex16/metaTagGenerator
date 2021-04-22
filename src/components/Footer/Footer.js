import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<img src='./assets/logoFooter.svg' alt='logo Leonel' className='footer__logo' />
			<p className='footer__text'> Leonel Espinoza &copy; 2021</p>
		</footer>
	);
};

export default Footer;
