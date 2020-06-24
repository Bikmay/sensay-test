import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
              <Router>
                <Switch>
                    <Route path="/" component={Login} />
                </Switch>
                </Router>
            
        );
    }
}

export default App;