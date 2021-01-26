import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import { Redirect, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Redirect path='/'/>
        </Switch>
        </>
    );
}

export default App;