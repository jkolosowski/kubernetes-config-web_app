import React from 'react';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Songs from './ui/songs/Songs';
import SongAdd from './ui/songs/SongAdd';

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={ Songs }/>
                    <Route path={'/add'} exact component={ SongAdd }/>
                </Switch>
            </Router>
        </div>
    )
};

export default connect(undefined)(App);
