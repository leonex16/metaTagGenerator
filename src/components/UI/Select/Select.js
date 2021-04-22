import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import DataMetaTagsContext from '../../../helpers/DataMetaTagsContext';
import setNewState from '../../../helpers/setNewState';

import './Select.css';

const Select = ({ labelText, selectData, name }) => {
	const [valueSelect, setValueSelect] = useState(selectData.find(data => data.selected && data));
	const { dataMetaTags, setDataMetaTags } = useContext(DataMetaTagsContext);

	const onChange = ({ target }) => {
		setNewState(dataMetaTags, setDataMetaTags, target);
		setValueSelect(target.value);
	};
	return (
		<div className='select'>
			<label className='selectLabel'>{labelText}</label>
			<select className='selectBox' name={name} value={valueSelect.value} onChange={onChange}>
				{selectData.map(({ id, value }) => (
					<option key={id + '-' + value} className='selectOption' value={value}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};

Select.propTypes = {
	labelText: PropTypes.string.isRequired,
	selectData: PropTypes.array.isRequired,
};

export default Select;

// defaultValue={selectData.find(opt => opt?.selected && opt?.value)}
