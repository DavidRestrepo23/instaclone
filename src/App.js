import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed/Index';
import NavBar from './components/Basic/NavBar';
import Profile from './containers/Profile/Profile';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
            {/** APP */}
            <Route path="/app" component={NavBar} />
            <Route path="/app/newsfeed" exact={true} component={NewsFeed} />
            <Route path="/app/profile" exact={true} component={Profile}/>

            {/** Auth */}
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/Register" exact={true} component={Register}/>
            
      </div>
    );
  }
}

export default App;
