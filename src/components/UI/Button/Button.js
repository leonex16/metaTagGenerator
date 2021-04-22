import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ bgColor, text, textColor, type, onClick }) => {
	const styleBtn = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<button className='button' type={type} style={styleBtn} onClick={onClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
	bgColor: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default Button;
