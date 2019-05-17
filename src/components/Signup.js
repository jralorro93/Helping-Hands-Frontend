import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions'
import { postUser } from '../actions/actions'

class Signup extends Component {

  state = {
    selectedOption: "",
    first_name: "",
    last_name: "",
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
    //Sets new user to current state info
    let newUser = this.state
    //Takes current user and adds as a payload
    this.props.addUser(newUser)
    //Makes a POST request to create new user
    this.props.postUser(newUser)
  }

  render() {
    return (
      <div>
        <h1>Join us!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First name: </label>
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br/>
          <label>Last name: </label>
          <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br/>
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


export default connect(null, {addUser, postUser} )(Signup)
