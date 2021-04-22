import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbarLinks'>
				<li className='navbarLink'>
					<img className='navbarLinkImg' src='/assets/logo.png' alt='Logo Meta Tag Generator' />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
