import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMGPATH } from '../api'
import styled from 'styled-components';
import { addToFavourite, removeFromFavourite } from '../redux/MovieActions';


const MovieCard = ({ movie }) => {

    const dispatch = useDispatch();

    const { favourite } = useSelector(state => state.movies);

    const findMovie = favourite.find(fav => fav.id === movie.id);

    const ratingBg = (rating) => {
        if (rating >= 5) {
            return "orange";
        } else if (rating >= 8) {
            return "green";
        } else {
            return "red";
        }
    }

    return (
        <CardStyle key={movie.id}>
            <img src={`${IMGPATH}/${movie.poster_path}`} />
            <div className="info">
                <div className="content">
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <div className="action">
                        <div className={`rating ${ratingBg(movie.vote_average)}`}>⭐ {movie.vote_average}</div>
                        {!findMovie && <button onClick={() => dispatch(addToFavourite(movie))}>Add To Favourite</button>
                        }
                        {findMovie && <button class="removeFromFav" onClick={() => dispatch(removeFromFavourite(movie))}>Remove From Favourite</button>
                        }

                    </div>
                </div>
            </div>
        </CardStyle>
    )
}

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    &:hover {
        .info {
            top: 0;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .info {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        padding: 30px;
        background: rgba(29,29,68,0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        transition: all 0.5s;
        .content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h3 {
                font-size: 35px;
                color: #fff;
                font-weight: bold;
                margin-bottom:15px;
            }
            p {
                font-size: 18px;
                color: #fff;
                font-weight: normal;
                line-height: 26px;
            }
        }
    }
    .action {
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-top: 40px;
        .rating {
            display: flex;
            flex-direction: column;
            
            color: #fff;
            padding: 5px;
            width: 80px;
            text-align: center;
            border-radius: 5px;
            &.red {
                background: #e74c3c;
            }
            &.orange {
                background: #e67e22;
            }
            &.green {
                background: #27ae60;
            }
        }
        button {
            padding: 10px;
            background: #69AFBE;
            font-size: 13px;
            border-radius: 5px;
            color: #fff;
            font-family: 'Quattrocento Sans', sans-serif;
            font-weight:bold;
            cursor: pointer;
        }
    }
    .removeFromFav {
        background: #e74c3c !important;
    }
`

export default MovieCard
