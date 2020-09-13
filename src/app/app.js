import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '@shared/header';
import Main from '@components/main';
import Footer from '@shared/footer';

export default () => {
	return (
		<BrowserRouter>
			<div className="flex flex-col min-h-screen">
				<Header />
				<Main />
				<Footer />
			</div>
		</BrowserRouter>
	);
}
