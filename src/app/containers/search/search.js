import React, { Component } from 'react';
import Heading from '@shared/heading';
import MovieDetails from '@components/movie-details/movie-details';
import NoResults from '@components/no-results/no-results';
import Searchbar from '@components/searchbar/searchbar';
import { queryMovies } from '@api/api';

class Search extends Component {
    state = {
        query: '',
        movies: [],
        dirty: false
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

            this.setState({ dirty: true }); // let the render functino know that user has tried a search

            if(this.state.query) {
                queryMovies(this.state.query)
                    .then(response => {
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
    }

    render() {
        let fallback = this.state.dirty ? <NoResults /> : null;

        return (
            <div className="my-8">
                <Heading>
                    Search Movies by Title
                </Heading>

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
                    )) : fallback
                }
            </div>
        );
    }
};

export default Search;
