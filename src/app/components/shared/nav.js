import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
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
            <li className="flex items-center">
                <NavLink
                to="/search"
                className="hover:text-gray-300 focus:text-gray-300 px-5 py-1" 
                activeClassName="underline">

                    Search
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;