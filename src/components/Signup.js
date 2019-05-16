import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions'

class Signup extends Component {

  state = {
    selectedOption: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChangeRole = (event) => {
    this.setState({
      selectedOption: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = this.state
    this.props.addUser(newUser)
    this.setState({
      selectedOption: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
        <h1>Join us!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First name: </label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/><br/>
          <label>Last name: </label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/><br/>
          <label>Email: </label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
          <label>Password: </label>
          <input type="password"name="password" value={this.state.password} onChange={this.handleChange}/><br/>
            <label>
              <input type="radio" value="client" checked={this.state.selectedOption === 'client'} onChange={this.handleChangeRole}/>
              Client
            </label>
            <label>
              <input type="radio" value="service provider" checked={this.state.selectedOption === 'service provider'} onChange={this.handleChangeRole}/>
              Service Provider
            </label><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addUser} )(Signup)
