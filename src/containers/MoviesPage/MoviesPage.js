import React, { Component } from 'react';
import { Header } from "../../components/Header/Header";
import { MovieListCard } from "../../components/MovieListCard/MovieListCard";
import { MovieList } from "../../components/MovieList/MovieList";

export class MoviesPage extends Component {

    componentDidMount(){
        const {
            genresConfig: { genres },
            moviesConfig: { movies },
            actions: { getGenres, getMovies },
        } = this.props;

            getGenres();
            getMovies();
        console.log(genres, movies);
    }

    render() {
        const {
            genresConfig: { genres, genreError },
            moviesConfig: { movies, movieError, isLoading },
        } = this.props;

        return (
            <div>
                <Header />

                {
                    isLoading && <h2 className='d-flex justify-content-center'>Loading...</h2>
                }

                {
                    !isLoading && !genreError && !movieError &&
                    <MovieList genres={genres} itemRendered={MovieListCard} options={movies}/>
                }

                {
                    genreError && <div>{genreError}</div>
                }

                {
                    movieError && <div>{movieError}</div>
                }
            </div>
        );
    }
}