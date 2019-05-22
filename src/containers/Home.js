import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Signup from '../components/Signup'

class Home extends Component {

  handleSignup = (event) => {
    console.log('this is signup', event)
  }

  render() {
    return (
      <div>
        Hi from Home
        <NavBar />

      </div>
    )
  }
}
export default withRouter(connect()(Home))
