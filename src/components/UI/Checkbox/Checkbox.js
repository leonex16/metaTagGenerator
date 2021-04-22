import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import setNewState from '../../../helpers/setNewState';
import DataMetaTagsContext from '../../../helpers/DataMetaTagsContext';

import './Checkbox.css';

const Checkbox = ({ checked, labelText, name }) => {
	const [inputValue, setInputValue] = useState(checked);
	const { dataMetaTags, setDataMetaTags } = useContext(DataMetaTagsContext);

	const handlerChange = ({ target }) => {
		setNewState(dataMetaTags, setDataMetaTags, target);
		setInputValue(!inputValue);
	};

	return (
		<div className='input'>
			<label className='inputLabel'>{labelText}</label>
			<input
				type='checkbox'
				className='inputBox'
				name={name}
				value={inputValue}
				checked={inputValue}
				onChange={handlerChange}
			/>
		</div>
	);
};

Checkbox.defaultProps = {
	checked: false,
	name: '',
	labelText: '',
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	name: PropTypes.string,
	labelText: PropTypes.string.isRequired,
};

export default Checkbox;
