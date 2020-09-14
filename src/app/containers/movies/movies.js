import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchMoviesData } from '@store/actions/creators';
import Heading from '@shared/heading';
import MovieCard from '@components/movie-card/movie-card';
import Error from '@components/error/error';

const Movies = props => {
    const { movies, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(movies.length <= 0 && !error) {
            dispatch(fetchMoviesData());
        }
    });

    const fallback = error ? <Error /> : null;

    const moviesList = movies.map(movie => (
        <li key={movie.imdbID}>
            <MovieCard
                title={movie.Title}
                poster={movie.Poster}
                link={`${props.match.url}/${movie.imdbID}`} />
        </li>
    ));

    return (
        <div className="my-8">
            <Heading>
                Movies
            </Heading>

            {
                moviesList.length > 0 ? (
                    <ul className="grid grid-cols-5 gap-4">
                        {moviesList}
                    </ul>
                ) : fallback
            }
        </div>
        
    )
};

export default Movies;
