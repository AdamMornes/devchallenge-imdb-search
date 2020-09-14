import React from 'react';
import imageNotFound from '@images/not-found.jpg';

const MovieDetails = props => (
    <div className="grid grid-cols-3 gap-8 my-8">
        <div>
            <img
                className="w-full border-2 border-gray-300 p-1"
                src={props.poster !== 'N/A' ? props.poster : imageNotFound}
                alt={props.title} />
        </div>

        <div className="col-span-2">
            <h1 className="text-3xl font-bold leading-tight mb-4">{props.title}</h1>

            <p className="mb-4">{props.plot}</p>
                
            {
                props.ratings.length > 0 ? (
                    <React.Fragment>
                        <h2 className="font-bold text-lg">Ratings:</h2>
                        
                        <hr className="my-1" />
                        
                        <ul className="text-sm">
                            {
                                props.ratings.map((rating, i) => (
                                    <li key={`_movie_rating_${i}`}>
                                        <span className="font-bold">{rating.Source}:</span> {rating.Value}
                                    </li>
                                ))
                            }
                        </ul>
                    </React.Fragment>
                ) : null
            }
        </div>
    </div>
);

export default MovieDetails;
