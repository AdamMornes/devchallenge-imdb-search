import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@images/logo.png';

export default () => (
    <header className="bg-gray-800 py-3">
        <div className="container flex items-center justify-between text-gray-200 mx-auto">
            <a href="/" className="flex items-center text-2xl font-mono">
                <span className="block relative w-16 rounded-full border-4 border-white-600 p-3 overflow-hidden mr-3">
                    <img src={logo} className="max-w-full max-h-full" alt="Mini Netflix" />
                    <span className="absolute block top-1/2 left-1/2 h-1 w-32 bg-white transform -translate-y-1/2 -translate-x-1/2 -rotate-45"></span>
                </span>

                Mini Netflix
            </a>

            <nav>
                <ul className="flex items-center list-none -mx-5">
                    <li className="flex items-center">
                        <NavLink
                        to="/movies"
                        className="hover:text-gray-300 focus:text-gray-300 px-5 py-1" 
                        activeClassName="underline">

                            Movies
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                        to="/best-movie"
                        className="hover:text-gray-300 focus:text-gray-300 px-5 py-1" 
                        activeClassName="underline">

                            Best Movie
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
