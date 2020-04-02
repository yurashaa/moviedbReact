import React, {Fragment} from 'react';
import {MoviesPage} from "./containers/MoviesPage";
import {Redirect, Route, Switch} from "react-router-dom";
import {ExactMoviePage} from "./containers/ExactMoviePage";
import { urlContext } from './context'
import {Header} from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Fragment>

            <Header/>

            <Switch>

                <Route exact path='/' render={props => {
                    return (
                        <urlContext.Provider value={{...props}  }>
                            <MoviesPage/>
                        </urlContext.Provider>
                    )
                }
                }/>

                <Route exact path='/movie/movie-id/:id' render={props => {
                    return (
                        <urlContext.Provider value={{...props}  }>
                            <ExactMoviePage/>
                        </urlContext.Provider>
                    )
                }
                }/>

                <Route exact path='/not-found'>
                    <div>NOT FOUND</div>
                </Route>

                <Redirect from='*' to='/not-found'/>

            </Switch>
        </Fragment>
    );
}

export default App;
