import React, { Component } from 'react';
import ClientAppt from '../components/ClientAppt';
import { connect } from 'react-redux';
import ClientAppointment from '../components/ClientAppointment';

class ClientApptContainer extends Component {

  render() {
    console.log('this is state: ', this.state)
    console.log('this is store from ClientApptContainer', this.props)
    return (
        <div>
          <h2>Hi from ClientApptContainer</h2>
          <h2>Current Bookings:</h2>
          <ul>
            {this.props.currentUser.appointments.map(appointment => {
              let sp = this.props.currentUser.service_providers.find(sp => sp.id === appointment.service_provider_id)
              return <ClientAppointment serviceProvider={sp} appointment={appointment}/>
            })}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.login.user
  }
}

export default connect(mapStateToProps)(ClientApptContainer)


// {this.state.serviceProviders.service_providers === undefined ? null : (this.state.serviceProviders.service_providers.map(worker => {
//   return <ClientAppointment worker={worker} />})
// )}
