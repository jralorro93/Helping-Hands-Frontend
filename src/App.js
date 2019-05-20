import React, {Component} from 'react';
import './App.css';
import { withRouter, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import { connect } from 'react-redux'
import ClientProfile from './containers/ClientProfile'
import SPSide from './containers/SPSide'

class App extends Component {




  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/clientProfile" component={ClientProfile} />
        <Route exact path="/spProfile" component={SPSide}/>
      </Switch>
    )
  }
}
export default withRouter(connect()(App));
