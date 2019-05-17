import React, {Component} from 'react';
import './App.css';
import { withRouter, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import { connect } from 'react-redux'

class App extends Component {




  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    )
  }
}
export default withRouter(connect()(App));
