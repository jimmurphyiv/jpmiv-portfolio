import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';
import Links from './Components/Links/Links';

export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Header' component={Header} />
        <Route path='/Nav' component={Nav} />
        <Route path='/About' component={About} />
        <Route path='/Connect' component={Connect} />
        <Route path='/Links' component={Links} />
    </Switch>
);