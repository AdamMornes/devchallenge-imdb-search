import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import MovieDetails from '@components/movie-details/movie-details';
import NotFound from '@shared/not-found';
import { fetchMoviesData } from '@store/actions/creators';

const Movie = props => {
    let movie = null;
    const { movies, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(movies.length <= 0 && !error) {
            dispatch(fetchMoviesData());
        }
    });
    
    movie = movies.find(movie => movie.imdbID === props.match.params.id);

    return movie ? 
        <MovieDetails
            title={movie.Title}
            poster={movie.Poster}
            plot={movie.Plot}
            ratings={movie.Ratings}
        /> : <NotFound />;
};

export default Movie;
