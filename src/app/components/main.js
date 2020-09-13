import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Movies from './movies/movies';
import Movie from './movies/movie/movie';
import BestMovie from './best-movie/best-movie';
import NotFound from './shared/not-found';

const Main = () => (
    <main className="container mx-auto flex-1">
        <Switch>
            <Route path="/movies" component={Movies} exact />
            <Route path="/movies/:id" component={Movie} />
            <Route path="/best-movie" component={BestMovie} />
            <Redirect from="/" to="/movies" exact />
            <Route component={NotFound} />
        </Switch>
    </main>
);

export default Main;
