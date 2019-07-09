import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Signup from '../components/Signup'
import { loginUser } from '../actions/actions';
import { Container, Header, Button, Icon, Image, Grid, Segment, Form } from 'semantic-ui-react'
import gardener from '../assets/images/gardener.jpg'
import babysitter from '../assets/images/babysitter.jpg'



class Home extends Component {


  state = {
    email: '',
    password: '',
    role: ''
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

  handleMoveToSignup = () => {
    this.state.role === 'client' ? this.props.history.push('/signup') : this.props.history.push('/spSignup')
  }



  render() {
    return (
      <div>
        <div className="headerWithText" >
        </div>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <h1>Login</h1>
                <Form onSubmit={(event) => this.handleLogin(event, this.state)}>
                  <Form.Input icon='user' iconPosition='left' label='Email'  placeholder='Email' type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                  <Form.Input icon='lock' iconPosition='left' label='Password' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  <input type="submit" />
                </Form>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <div className='signupForm'>
                  <h1>Join us!</h1>
                  <Form>
                    <Form.Input label='Client' control='input' type='radio' name='role' value='client' onChange={this.handleChange}/>
                    <p>or</p>
                    <Form.Input label='Service Provider' control='input' type='radio' name='role' value='service provider' onChange={this.handleChange}/>
                    <Button color='blue' content='Sign up' icon='signup' size='big' onClick={this.handleMoveToSignup} />
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <div className="fixed-footer">
          <div className='container'>
            Copyright &copy; 2019 Helping Hands
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(connect(null, {loginUser})(Home))
// <Grid container columns={3}>
//   <Grid.Column>
//     <Image src='/images/wireframe/image.png' />
//   </Grid.Column>
//   <Grid.Column>
//     <Image src='/images/wireframe/image.png' />
//   </Grid.Column>
//   <Grid.Column>
//     <Image src='/images/wireframe/image.png' />
//   </Grid.Column>
// </Grid>
//
