import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/actions';

class Login extends Component  {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event, userObj) => {
    event.preventDefault();
    this.props.loginUser(userObj, this.props.history)
  }




  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(event) => this.handleLogin(event, this.state)}>
          <label>Email: </label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
          <label>Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { loginUser })(Login)
