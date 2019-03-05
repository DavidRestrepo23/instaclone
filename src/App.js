import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Auth/Login';
import Home from './containers/Home';
import Register from './containers/Auth/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Route path="/" exact="true" component={Home} />
            <Route path="/login" exact="true" component={Login}/>
            <Route path="/Register" exact="true" component={Register}/>
      </div>
    );
  }
}

export default App;
