import React from 'react';
import Logo from './logo';
import Nav from './nav';

const Header = () => (
    <header className="bg-gray-800 py-3">
        <div className="container flex items-center justify-between text-gray-200 mx-auto">
            <Logo />

            <Nav />
        </div>
    </header>
);

export default Header;
