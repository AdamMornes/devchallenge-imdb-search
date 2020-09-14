import React from 'react';

const Searchbar = props => (
    <form method="post" className="flex">
        <input
            className="flex-1 border-2 border-r-0 border-gray-500 rounded-l-md px-3"
            type="text"
            onChange={props.input}
            onKeyDown={props.submit} />

        <button
            className="text-white bg-blue-600 border-2 border-l-0 border-gray-500 rounded-r-md px-3 py-2"
            type="button"
            onClick={props.submit}>
                
            Search
        </button>
    </form>
);

export default Searchbar;
