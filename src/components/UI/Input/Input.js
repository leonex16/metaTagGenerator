import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import DataMetaTagsContext from '../../../helpers/DataMetaTagsContext';

import './Input.css';
import setNewState from '../../../helpers/setNewState';

const Input = ({ defaultValue, inputType, labelText, name, placeholder }) => {
	const { dataMetaTags, setDataMetaTags } = useContext(DataMetaTagsContext);
	const [inputValue, setInputValue] = useState(defaultValue);
	const [counter, setCounter] = useState(0);

	const handlerChange = ({ target }) => {
		setNewState(dataMetaTags, setDataMetaTags, target);
		setInputValue(target.value);
		setCounter(target.value.length);
	};

	return (
		<div className='input'>
			<label className='inputLabel'>{labelText}</label>
			<small className='inputCounter'>{counter} characters</small>
			<input
				className='inputBox'
				autoComplete='off'
				type={inputType}
				name={name}
				value={inputValue}
				placeholder={placeholder}
				onChange={handlerChange}
			/>
		</div>
	);
};

Input.defaultProps = {
	checked: false,
	defaultValue: '',
	placeholder: '',
};

Input.propTypes = {
	checked: PropTypes.bool,
	defaultValue: PropTypes.string,
	inputType: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

export default Input;
