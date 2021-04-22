import React from 'react';

import './Details.css';

const Details = ({ section, isOpen, handlerClick }) => {
	const [title, inputs] = Object.entries(section)[0];

	return (
		<details
			id={title}
			className='Details'
			onClick={handlerClick}
			open={isOpen}
			// open={Object.entries(openDetail).find(([key, value]) => key === title && value)}
		>
			<summary className='DetailsTitle'>{title}</summary>
			<form className='formMeta'>{inputs.map(input => input)}</form>
		</details>
	);
};

export default Details;
