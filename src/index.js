import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Login, Home, ShowSecretSanta } from './containers';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/show/:id" component={ShowSecretSanta}/>
            </Switch>
        </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);