import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Form from '../../components/Form/Form';
import Output from '../../components/Output/Output';
import Footer from '../../components/Footer/Footer';

import DataMetaTagsContext from '../../helpers/DataMetaTagsContext';
import dataMetaTag from '../../helpers/dataMetaTags';

import './Index.css';

const Index = () => {
	const [dataMetaTags, setDataMetaTags] = useState(dataMetaTag);

	return (
		<DataMetaTagsContext.Provider value={{ dataMetaTags, setDataMetaTags }}>
			<Navbar />
			<main className='index'>
				<Form />
				<Output />
			</main>
			<Footer />
		</DataMetaTagsContext.Provider>
	);
};

export default Index;
