import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Movies from '@containers/movies/movies';
import Movie from '@containers/movie/movie';
import BestMovie from '@components/best-movie/best-movie';
import NotFound from '@shared/not-found';

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
