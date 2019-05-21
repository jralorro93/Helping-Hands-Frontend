import React, { Component } from 'react';
import ClientApptContainer from './ClientApptContainer';
import ClientSideBar from '../components/ClientSideBar';
import NewBookingContainer from './NewBookingContainer'
import { connect } from 'react-redux'

class ClientSide extends Component {
  render() {
    return (
      <div>
        Hi from Client Side
        <ClientSideBar />
        <ClientApptContainer />
        <NewBookingContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.user}
}

export default connect(mapStateToProps)(ClientSide)
