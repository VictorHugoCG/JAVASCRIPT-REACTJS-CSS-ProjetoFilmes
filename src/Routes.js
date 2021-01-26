import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home/Home'
import Header from './components/Header/Header';
import Erro from './pages/Erro/Erro'

const Routes = ()=> {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;