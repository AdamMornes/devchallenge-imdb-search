import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Heading from '@shared/heading';
import MovieDetails from '@components/movie-details/movie-details';
import NotFound from '@shared/not-found';
import { fetchMoviesData } from '@store/actions/creators';

const Movie = props => {
    let movie = null;
    const { movies, error } = useSelector(state => state);
    const dispatch = useDispatch();

    // need to check and/or load data if it hasn't been loaded yet from movies container
    useEffect(() => {
        if(movies.length <= 0 && !error) {
            dispatch(fetchMoviesData());
        }
    });
    
    movie = movies.find(movie => movie.imdbID === props.match.params.id);

    return (
        <div className="my-8">
            <Heading>
                Movie Details
            </Heading>

            {
                movie ? 
                <MovieDetails
                    title={movie.Title}
                    poster={movie.Poster}
                    plot={movie.Plot}
                    ratings={movie.Ratings}
                /> : <NotFound />
            }
        </div>
    )
};

export default Movie;
