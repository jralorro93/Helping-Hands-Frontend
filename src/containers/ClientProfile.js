import React, { Component } from 'react';
import ClientApptContainer from './ClientApptContainer';
import ClientSideBar from '../components/ClientSideBar';
import NewBookingContainer from './NewBookingContainer'

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

export default ClientSide
