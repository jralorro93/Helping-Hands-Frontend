import React, { Component } from 'react';
import ClientApptContainer from './ClientApptContainer';

class ClientSide extends Component {
  render() {
    return (
      <div>
        Hi from Client Side
        <ClientApptContainer />
      </div>
    )
  }
}

export default ClientSide
