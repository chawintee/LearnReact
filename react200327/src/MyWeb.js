import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Homepage from './Homepage';
import Resume from './Resume';
import Facebook from './Facebook';
import App from './App'
import Login from './Login'


export default class MyWeb extends Component {
    render() {
        return (

            <switch>
                <Route exact path ='/' component={Homepage} />
                <Route path ='/resume' component={Resume} />
                <Route path ='/facebook' component={Facebook} />
                <Route path ='/app' component={App} />
                <Route path ='/login' component={Login} />
            </switch>
            
        )
    }
}
