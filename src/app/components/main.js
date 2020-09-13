import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Movies from './movies/movies';
import BestMovie from './best-movie/best-movie';
import NotFound from './shared/not-found';
import getMovies from '../api/api';

export default () => {
    useEffect(() => {
        // getMovies
        //     .then(values => {
        //         console.log(values);
        //     });
    }, []);

    return(
        <main className="container mx-auto flex-1">
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/best-movie" component={BestMovie} />
                <Redirect from="/" to="/movies" exact/>
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}
