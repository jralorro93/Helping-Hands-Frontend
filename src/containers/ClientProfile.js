import React, { Component } from 'react';
import ClientSideBar from '../components/ClientSideBar';
import { connect } from 'react-redux'
// import ClientPageContainer from './ClientPageContainer'
import { logoutUser } from '../actions/actions'
import { Image } from 'semantic-ui-react'

class ClientProfile extends Component {





  handleLogout = event => {
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <ClientSideBar  handleLogout={this.handleLogout}/>
      </div>
    )
  }
}


export default connect(null, {logoutUser})(ClientProfile)
