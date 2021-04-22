import React from 'react';

import Preview from '../Preview/Preview';
import UiButton from '../UI/Button/Button';

import './Output.css';

const Output = () => {
	const onClick = () => {
		try {
			if (!navigator.clipboard) return alert("The copy function isn't support by your browser :(");
			const $code = document.querySelector('.previewCodeCode.language-html');
			navigator.clipboard.writeText($code.textContent).then(alert('Copied to the clipboard :D'));
		} catch (err) {
			alert("There was an error copying to the clipboard :'(");
		}
	};

	return (
		<section className='output'>
			<UiButton bgColor='#FC0474' text='Copy' textColor='#FFFFFF' type='button' onClick={onClick} />
			<Preview />
		</section>
	);
};

export default Output;
