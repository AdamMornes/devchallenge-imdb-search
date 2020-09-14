import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchMoviesData } from '../../store/actions/creators';

const Movies = props => {
    const { movies, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(movies.length <= 0 && !error) {
            dispatch(fetchMoviesData());
        }
    });

    const moviesList = movies.map(movie => (
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
    ));

    return moviesList.length > 0 ? (
        <ul className="grid grid-cols-5 gap-4 my-8 -mx-2">
            {moviesList}
        </ul>
    ) : null
};

export default Movies;
