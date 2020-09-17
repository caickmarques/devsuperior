import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Records from './pages/Records';
import Charts from './pages/Charts';

const Routes = () => (
    <BrowserRouter>
    <Header />
        <Switch>
            <Route path="devsuperior/" exact>
                <Home />
            </Route>
            <Route path="devsuperior/records">
                <Records />
            </Route>
            <Route path="devsuperior/charts">
                <Charts />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;