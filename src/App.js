import React, {Component} from 'react';
import './App.css';
import { withRouter, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import { connect } from 'react-redux'
import ClientProfile from './containers/ClientProfile'
import SPSide from './containers/SPSide'
import { loginUser, loginUserFromToken } from './actions/actions'

class App extends Component {

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      this.props.loginUserFromToken(localStorage.getItem('token'))
    }
  }


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
export default withRouter(connect(null, {loginUser, loginUserFromToken})(App));
