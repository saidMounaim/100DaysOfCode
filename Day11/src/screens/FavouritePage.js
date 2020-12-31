import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavouritePage = () => {

    const { favourite } = useSelector(state => state.movies);


    return (
        <MoviesStyle>
            {favourite.length === 0 ? <h1>There are No Favourite Movies</h1> :
                <>
                    <h1>Favourite Movies</h1>
                    <div className="grid-movies">
                        {favourite.map(movie =>
                            <MovieCard movie={movie} />
                        )}
                    </div>
                </>}
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
`

export default FavouritePage
