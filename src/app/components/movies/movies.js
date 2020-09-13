import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import getMovies from '../../api/api';

export default props => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getMovies
            .then(values => {
                console.log(values);
                setMovies(values)
            });
    }, []);

    return movies.length > 0 ? (
        <ul className="grid grid-cols-5 gap-4 my-8 -mx-2">
            {
                movies.map(movie => (
                    <li key={movie.imdbID}>
                        <article>
                            <Link to={`${props.match.url}/${movie.imdbID}`}>

                                <h2 className="text-xl font-bold leading-tight">{movie.Title}</h2>
                                
                                <img
                                    className="w-full mt-3 border-2 border-gray-300 p-1"
                                    src={movie.Poster}
                                    alt={movie.Title} />

                                <ul className="flex items-center justify-between text-sm mt-2" aria-label={movie.Title + ' Ratings'}>
                                    <li>
                                        <span className="font-bold">Metascore:</span> {movie.Metascore}
                                    </li>
                                    <li>
                                        <span className="font-bold">IMDB:</span> {movie.imdbRating}
                                    </li>
                                </ul>          
                            </Link>
                        </article>
                    </li>
                ))
            }
        </ul>
    ) : null
};
