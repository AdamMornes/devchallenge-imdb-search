import React, { Component } from 'react';
import MovieDetails from '@components/movie-details/movie-details';
import Searchbar from '@components/searchbar/searchbar';
import { queryMovies } from '@api/api';

class Search extends Component {
    state = {
        query: '',
        movies: []
    }

    input = evt => {
        this.setState({
            query: evt.target.value
        });
    }

    submit = evt => {
        const key = evt.which || evt.keyCode || 0;
        if(key === 13 || evt.type === 'click') {
            evt.preventDefault();

            queryMovies(this.state.query)
                .then(response => {
                    console.log(response);
                    let movies = [];
                    // weird api specific way of handling no results
                    if(response.Response === 'True') {
                        movies.push(response);
                    }

                    this.setState({ movies });
                })
                .catch(() => this.setState({ movies: [] }));
        }
    }

    render() {
        return (
            <div className="my-8">
                <h1 className="text-2xl font-bold leading-tight mb-4">Search Movies by Title</h1>
                <hr className="mt-3 mb-4" />

                <Searchbar
                    input={this.input}
                    submit={this.submit} />
                
                { 
                    this.state.movies.length > 0 ? this.state.movies.map(movie => (
                        <MovieDetails
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            plot={movie.Plot}
                            ratings={movie.Ratings} />
                    )) : null
                }
            </div>
        );
    }
};

export default Search;
