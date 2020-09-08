import React, { useEffect } from 'react';
import Movies from './movies/movies';
import getMovies from '../api/api';

export default () => {
    useEffect(() => {
        getMovies.then(values => {
            console.log(values);
        })
    }, []);

    return(
        <main className="container mx-auto flex-1">
            <Movies />
        </main>
    )
}
