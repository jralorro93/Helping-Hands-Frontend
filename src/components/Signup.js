import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions'
import { postUser } from '../actions/actions'
import { Form } from 'semantic-ui-react'

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
    this.props.postUser(newUser, this.props.history)
  }

  render() {
    return (
      <div className='SignUpPage'>
        <div className='SignUpForm'>
          <h1>Join us!</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input label='First Name: ' placeholder='First Name' type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br/>
              <Form.Input label='Last Name: ' placeholder='Last Name' type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br/>
            </Form.Group>
            <Form.Group>
              <Form.Input label='Email: ' placeholder='Email' type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
              <Form.Input label='Password: ' placeholder='Password' type="password"name="password" value={this.state.password} onChange={this.handleChange}/><br/>
            </Form.Group>
            <label>
              <input type="radio" value="client" checked={this.state.selectedOption === 'client'} onChange={this.handleChangeRole}/>
              Client
            </label>
            <label>
              <input type="radio" value="service provider" checked={this.state.selectedOption === 'service provider'} onChange={this.handleChangeRole}/>
              Service Provider
            </label><br/>
            <input type='submit'/>
          </Form>
        </div>
      </div>
    )
  }
}


export default connect(null, {addUser, postUser} )(Signup)

// <Form>
//   <Form.Group widths='equal'>
//     <Form.Input fluid label='First name' placeholder='First name' />
//     <Form.Input fluid label='Last name' placeholder='Last name' />
//     <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
//   </Form.Group>
//   <Form.Group inline>
//     <label>Size</label>
//     <Form.Radio
//       label='Small'
//       value='sm'
//       checked={value === 'sm'}
//       onChange={this.handleChange}
//     />
//     <Form.Radio
//       label='Medium'
//       value='md'
//       checked={value === 'md'}
//       onChange={this.handleChange}
//     />
//     <Form.Radio
//       label='Large'
//       value='lg'
//       checked={value === 'lg'}
//       onChange={this.handleChange}
//     />
//   </Form.Group>
//   <Form.TextArea label='About' placeholder='Tell us more about you...' />
//   <Form.Checkbox label='I agree to the Terms and Conditions' />
//   <Form.Button>Submit</Form.Button>
// </Form>

// <label>
//   <input type="radio" value="client" checked={this.state.selectedOption === 'client'} onChange={this.handleChangeRole}/>
//   Client
// </label>
// <label>
//   <input type="radio" value="service provider" checked={this.state.selectedOption === 'service provider'} onChange={this.handleChangeRole}/>
//   Service Provider
// </label><br/>



// <Form.Radio
//   label='Client'
//   value='client'
//   checked={this.state.selectedOption === 'client'}
//   onChange={this.handleChangeRole}
//   />
// <Form.radio
//   label='Service Provider'
//   value='service provider'
//   checked={this.state.selectedOption === 'service provider'}
//   onChange={this.handleChangeRole}
//
//   />
