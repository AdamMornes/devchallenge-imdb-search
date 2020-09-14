import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@images/logo.png';

const Logo = () => (
    <Link to="/" className="flex items-center text-2xl font-mono">
        <span className="block relative w-16 rounded-full border-4 border-white-600 p-3 overflow-hidden mr-3">
            <img src={logo} className="max-w-full max-h-full" alt="Mini Netflix" />
            <span className="absolute block top-1/2 left-1/2 h-1 w-32 bg-white transform -translate-y-1/2 -translate-x-1/2 -rotate-45"></span>
        </span>

        Mini Netflix
    </Link>
);

export default Logo;
