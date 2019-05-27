import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Signup from '../components/Signup'
import { loginUser } from '../actions/actions';
import { Container, Header, Button, Icon, Image, Grid, Segment } from 'semantic-ui-react'

class Home extends Component {

  handleSignup = (event) => {
    console.log('this is signup', event)
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
                content='Help us, help you.'
              />
            </Container>
          </div>
        </div>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </div>
    )
  }
}
export default withRouter(connect(null, {loginUser})(Home))
