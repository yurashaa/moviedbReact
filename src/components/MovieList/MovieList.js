import React, {Component} from 'react';
import './MovieList.scss'

const CN = 'movie-list';

export class MovieList extends Component {

    render() {
        const {genres, itemRendered, options } = this.props;
        const ItemRendered = itemRendered;

        return (
            <div className={`${CN}`}>
                {
                    !!options.length && options.map(item => {
                        let movieGenres = [];
                        [...genres].filter(genre => [...item.genre_ids].filter(id =>{
                            if(genre.id === id)
                                movieGenres.push(genre);
                            return 1;
                        }));
                        debugger
                        return (
                                <ItemRendered key={item.id} movie={item} genre={movieGenres}/>
                        )
                    })
                }
            </div>
        );
    }
}