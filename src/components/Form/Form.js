import React, { useState } from 'react';

import Details from '../Details/Details';
import inputsForm from '../../helpers/inputsForm';
import checkboxsForm from '../../helpers/checkboxsForm';

import './Form.css';

const Form = () => {
	const [openDetail, setOpenDetail] = useState({
		Recommend: true,
		'Open Graph & Facebook': false,
		Twitter: false,
		'Google +': false,
		iOS: false,
		Windows: false,
		Links: false,
	});

	const handlerClick = e => {
		if (!e.target.matches('summary')) return;
		e.preventDefault();

		let newState = {};

		Object.entries(openDetail).forEach(([prop, value]) =>
			prop === e.target.parentElement.id ? (newState[prop] = !value) : (newState[prop] = false),
		);

		setOpenDetail(newState);
	};

	return (
		<section className='form'>
			<section className='checkMetaTags'>
				<header className='checkMetaTagsHeader'>
					<p className='checkMetaTagsTitle'>Mark the sections you want to generate</p>
				</header>
				<div className='checkMetaTagsSections'>{checkboxsForm.map(checkbox => checkbox)}</div>
			</section>
			{inputsForm.map(section => (
				<Details
					key={Object.keys(section).toString()}
					section={section}
					isOpen={openDetail[Object.keys(section)[0]]}
					handlerClick={handlerClick}
				/>
			))}
		</section>
	);
};

export default Form;
