import React, { Component } from 'react';

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

  handleSubmit = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
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
export default Login
