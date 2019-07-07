import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Divider } from 'semantic-ui-react';
import { postUser } from '../actions/actions';



class SPSignUp extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConf: "",
    role: 'service provider',
    job: '',
    availability: '',
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if ( this.state.password === this.state.passwordConf){
      let newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
      }
      let newService = {
        job: this.state.job,
        availability: this.state.availability,
        description: this.state.description
      }
      this.props.postUser(newUser, this.props.history)
    } else {
      return 'The passwords must match'
    }
  }
  render() {
    return (
      <div className='SignUpPage'>
        <div className='SPSignUpForm'>
          <h2>Service Provider</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input label='First Name' placeholder="First Name" type='text' name='first_name' value={this.state.first_name} onChange={this.handleChange}/>
              <Form.Input label='Last Name' placeholder="Last Name" type='text' name='last_name' value={this.state.last_name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Input label='Email' placeholder="Email" type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
              <Form.Input label='Password' placeholder="Password" name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
              <Form.Input label='Password Confirmation' placeholder="Password Confirmation" name='passwordConf' type='password' value={this.state.passwordConf} onChange={this.handleChange}/>
            </Form.Group>
            <input type='submit'/>
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(null, {postUser})(SPSignUp)
