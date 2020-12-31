import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/MovieActions';
import MovieCard from './MovieCard';
import Loader from './Loader';
import Error from './Error';

const Movies = () => {

    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector(state => state.movies);


    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <MoviesStyle>
            <div className="header">
                <h1>Popular movies</h1>
            </div>
            {loading ? <Loader /> : error ? <Error>{error}</Error> : (
                <div className="grid-movies">
                    {movies.map(movie =>
                        <MovieCard movie={movie} />
                    )}
                </div>
            )}
        </MoviesStyle>
    )
}

const MoviesStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px 140px;

    h1 {
        font-size: 45px;
        color: #1D1D44;
        font-weight:bold;
    }
    .grid-movies {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        margin-top: 35px;
    }
    .header {
        display: flex;
        justify-content:space-between;
        align-items: center;
        input {
            font-family: 'Quattrocento Sans', sans-serif;
            width: 230px;
            background:#1D1D44;
            padding: 14px;
            border-radius: 6px;
            color: #fff;
            font-size: 15px;
            &::placeholder {
                color: #fff;
            }
        }
    }
`

export default Movies
