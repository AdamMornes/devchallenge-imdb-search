import React from 'react';
import Header from '@shared/header';
import Main from '@components/main';
import Footer from '@shared/footer';

export default () => {
	return (
		<div className="flex flex-col min-h-screen w-screen">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
