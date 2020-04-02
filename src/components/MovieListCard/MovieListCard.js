import React, { useContext } from 'react';
import {Rating} from "../Rating/Rating";
import {Button} from "../Button/Button";
import {urlContext} from "../../context";
import './MovieListCard.scss'

export const movieExample = {
    popularity: 515.152,
    vote_count: 2762,
    video: false,
    poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    id: 419704,
    adult: false,
    backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
    original_language: "en",
    original_title: "Ad Astra",
    genre_ids: [
        18,
        878
    ],
    title: "Ad Astra",
    vote_average: 6,
    overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    release_date: "2019-09-17"
};

const CN = 'movie-card';

export const MovieListCard = (props) => {
    const {movie: {id, backdrop_path, overview, title, vote_average}, genre} = props;
    const urlProps = useContext(urlContext);

    const onClickHandler = (id) => (e) => {
        e.stopPropagation();

        console.log(urlProps);
        const { history } = urlProps;

        history.push(`/movie/movie-id/${id}`);
    };

    return (
        <div className={`${CN} card`}>
                            {
                                backdrop_path && <img className={`card-img-top`}
                                                      src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
                                                      alt="movie img"
                                />}

                            <div className={`card-body`}>
                                <h4 className={`card-title`}>{title}</h4>
                                {
                                    genre.map(item => {
                                        return (
                                            <h6 key={item.id} className={`${CN} card-subtitle genre `}>{item.name}</h6>
                                        )
                                    })
                                }
                                <p className={`text-justify`} style={{fontSize: '12px'}}>{overview}</p>
                            </div>
                            <div className={`card-footer d-flex justify-content-between`}>
                                <Rating rating={vote_average / 2}/>
                                <Button
                                    label='See more'
                                    onClick={onClickHandler(id)}
                                />
                            </div>
        </div>

    )
};