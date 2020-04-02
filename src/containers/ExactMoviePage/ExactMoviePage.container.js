import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../../actions'
import { ExactMoviePage as ExactMoviePageComponent } from "./ExactMoviePage";

const mapStateToProps = (state) => {
    const { movies } = state;
    return {
        movieConfig: movies,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
};

export const ExactMoviePage = connect(mapStateToProps, mapDispatchToProps)(ExactMoviePageComponent);