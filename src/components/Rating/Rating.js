import React from 'react';
import './Rating.scss'

export const Rating = ({rating}) => {

    let stars = [];

    for ( let i = 0; i < 5; i++ ){
        let klass = 'star-rating__star';

        if (rating >= i && rating != null)
            klass += ' is-selected';

        stars.push(
            <label key={i} className={klass}>
                ★
            </label>
        )
    }

    return (
        <div className="star-rating">
            {stars}
        </div>
    );
};
