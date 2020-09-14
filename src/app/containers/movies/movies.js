import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchMoviesData } from '@store/actions/creators';
import MovieCard from '@components/movie-card/movie-card';

const Movies = () => {
    const { movies, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(movies.length <= 0 && !error) {
            dispatch(fetchMoviesData());
        }
    });

    const moviesList = movies.map(movie => (
        <li key={movie.imdbID}>
            <MovieCard
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster} />
        </li>
    ));

    return moviesList.length > 0 ? (
        <ul className="grid grid-cols-5 gap-4 my-8 -mx-2">
            {moviesList}
        </ul>
    ) : null
};

export default Movies;
