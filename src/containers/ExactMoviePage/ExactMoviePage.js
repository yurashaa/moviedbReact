import React, {useContext, useEffect} from 'react'
import {urlContext} from "../../context";
import './ExactMoviePage.scss';

const CN = 'movie';

export const ExactMoviePage = (props) => {
    const {actions: {getExactMovie}, movieConfig: {exactMovie}} = props;
    const {
        adult,
        poster_path,
        budget,
        genres,
        original_language,
        original_title,
        title,
        overview,
        release_date,
        vote_average,
        tagline,
        spoken_languages,
    } = exactMovie;
    const urlProps = useContext(urlContext);

    useEffect(() => {
        const {match: {params: {id}}} = urlProps;
        getExactMovie(id);
    }, []);

    return (
        <div className='card'>
            <div className={`${CN}__title`}>{title}</div>
            <div className={`${CN}__body`}>
                {poster_path &&
                <div>
                    <img className={`${CN}__img`}
                         src={`http://image.tmdb.org/t/p/w780/${poster_path}`}
                         alt="movie img"
                    />
                </div>}
                <div className={`${CN}__body__info`}>
                    {tagline && <div className={`${CN}__body__title`}><i>'{tagline}'</i></div>}
                    <div className={`${CN}__choice`}>
                        {
                            genres && genres.map(item => {
                                return (
                                    <div key={item.name} className={`${CN}__choice__item`}>{item.name}</div>
                                )
                            })
                        }
                    </div>
                    <div className={`${CN}__info-item`}>Original title: <i>{original_title}</i></div>
                    <div className={`${CN}__info-item`}>Date of release: <i>{release_date}</i></div>
                    <div className={`${CN}__info-item`}>Original language: <i>{original_language}</i></div>
                    <div className={`${CN}__info-item`}>Average vote: <b>{vote_average}</b></div>
                    <div className={`${CN}__info-item`}>Budget: {budget}$</div>
                    <div className={`${CN}__info-item`}>Adult: <b>{adult ? '18+' : '6+'}</b></div>
                    <div className={`${CN}__choice`}>
                        {
                            spoken_languages && spoken_languages.map(lang => {
                                return (
                                    <div key={lang.name} className={`${CN}__choice__item`}>
                                        {lang.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={`${CN}__overview`}>{overview}</div>
        </div>
    )
};