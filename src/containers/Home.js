import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Signup from '../components/Signup'
import { loginUser } from '../actions/actions';
import { Container, Header, Button, Icon, Image, Grid, Segment, Form } from 'semantic-ui-react'

class Home extends Component {


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

  handleMoveToSignup = () => {
    this.props.history.push('/signup')
  }



  render() {
    return (
      <div>
        <div className="headerWithText">
          <div className='headerText'>
            <Container text>
              <Header
                className='headerText'
                as='h1'
                content='Helping Hands'
              />
              <Header
                className='headerText'
                as='h2'
                content='Help Us, Help You.'
              />
            </Container>
          </div>
        </div>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <h1>Login</h1>
                <form onSubmit={(event) => this.handleLogin(event, this.state)}>
                  <label>Email: </label>
                  <Form.Input icon='user' iconPosition='left' label='Email'  placeholder='Email' type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                  <label>Password: </label>
                  <Form.Input icon='lock' iconPosition='left' label='Password' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  <input type="submit" />
                </form>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Button color='blue' content='Sign up' icon='signup' size='big' onClick={this.handleMoveToSignup} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </div>
    )
  }
}
export default withRouter(connect(null, {loginUser})(Home))
// <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
// <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />
