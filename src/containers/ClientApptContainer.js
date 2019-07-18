import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientAppointment from '../components/ClientAppointment';

class ClientApptContainer extends Component {
  render() {
    console.log('this is ClientApptContainer: ', this.props)
    return (
        <div className='BookingContainer'>
          <h2 className='CurrentBookings'>Current Bookings:</h2>
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
