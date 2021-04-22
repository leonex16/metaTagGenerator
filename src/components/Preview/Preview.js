import React, { useEffect, useContext } from 'react';
import Prism from 'prismjs';

import './Preview.css';
import '../../lib/prism/prism.css';

import previewInintial from '../../helpers/previewInitial';
import DataMetaTags from '../../helpers/DataMetaTagsContext';

const Preview = () => {
	const { dataMetaTags } = useContext(DataMetaTags);
	const previewInitial = previewInintial(dataMetaTags);

	useEffect(() => Prism.highlightAll(), [previewInitial]);

	return (
		<div className='previewCode'>
			<pre className='previewCodePre'>
				<code className='previewCodeCode language-html white-space'>{previewInitial}</code>
			</pre>
		</div>
	);
};

export default Preview;
