import React, { Component } from 'react';
import ClientAppt from '../components/ClientAppt';
import { connect } from 'react-redux';
import ClientAppointments from '../components/ClientAppointments';

class ClientApptContainer extends Component {

  state = {
    currentUserId: this.props.currentUser.id,
    serviceProviders: []
  }


//GET Fetch request from current user to retrieve service providers
//Setting to local state so I can make cards for each
  // componentDidMount() {
  //   fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}`)
  //     .then(r => r.json())
  //     .then(clientInfo => console.log('this is clientinfo: ', clientInfo))
  // }




  render() {
    console.log('Hi from mapStateToProps, currentUser: ', this.props.currentUser.id)
    return (
        <div>
          <h2>Current Bookings:</h2>
          <ul>
            {this.props.appointments === undefined ? null : (
                this.props.appointments.map(appointment => <ClientAppointments appointment={appointment}/>)
            )}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.login.user.appointments,
    currentUser: state.login.user
  }
}

export default connect(mapStateToProps)(ClientApptContainer)
          //
          // {
          //   this.setState({
          //     serviceProviders: clientInfo.service_providers
          //   }
