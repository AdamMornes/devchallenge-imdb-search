import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const MovieCard = props => {
    const match = useRouteMatch();

    return (
        <article>
            <Link to={`${match.url}/${props.id}`}>
                <h2 className="text-xl font-bold leading-tight">{props.title}</h2>
                
                <img
                    className="w-full mt-3 border-2 border-gray-300 p-1"
                    src={props.poster}
                    alt={props.title} />       
            </Link>
        </article>
    )
};

export default MovieCard;
