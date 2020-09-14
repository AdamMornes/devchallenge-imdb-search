import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import NotFound from '../../shared/not-found';
import { fetchMoviesData } from '../../../store/actions/creators';

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

    return movie ? (
        <div className="grid grid-cols-3 gap-8 my-8 -mx-4">
            <div>
                <img
                    className="w-full border-2 border-gray-300 p-1"
                    src={movie.Poster}
                    alt={movie.Title} />
            </div>

            <div className="col-span-2">
                <h1 className="text-3xl font-bold leading-tight mb-4">{movie.Title}</h1>

                <p className="mb-4">{movie.Plot}</p>
                    
                <h2 className="font-bold text-lg">Ratings:</h2>

                <hr className="my-1" />

                <ul className="text-sm">
                    {
                        movie.Ratings.map((rating, i) => (
                            <li key={`_movie_rating_${i}`}>
                                <span className="font-bold">{rating.Source}:</span> {rating.Value}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    ) : <NotFound />;
};

export default Movie;
