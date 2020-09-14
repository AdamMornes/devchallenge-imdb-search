import React, { Component } from 'react';
import MovieDetails from '@components/movie-details/movie-details';

class Search extends Component {
    state = {
        query: '',
        movies: []
    }

    render() {
        return (
            <React.Fragment>
                { 
                    this.state.movies.length > 0 ? this.state.movies.map(movie => (
                        <MovieDetails
                            title={movie.Title}
                            poster={movie.Poster}
                            plot={movie.Plot}
                            ratings={movie.Ratings} />
                    )) : null
                }
            </React.Fragment>
        );
    }
};

export default Search;
