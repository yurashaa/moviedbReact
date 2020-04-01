import {connect} from "react-redux";
import { MoviesPage as MoviesPageComponent } from "./MoviesPage";
import {bindActionCreators} from "redux";
import * as actions from '../../actions'

const mapStateToProps = (state) => {
    const { movies, genres } = state;
    return {
        moviesConfig: movies,
        genresConfig: genres,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...actions,
        }, dispatch)
    };
};


export const MoviesPage = connect(mapStateToProps, mapDispatchToProps)(MoviesPageComponent);