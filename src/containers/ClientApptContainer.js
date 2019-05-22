import React, { Component } from 'react';
import ClientAppt from '../components/ClientAppt';
import { connect } from 'react-redux';
import ClientAppointment from '../components/ClientAppointment';

class ClientApptContainer extends Component {

  state = {
    serviceProviders: []
  }


//GET Fetch request from current user to retrieve service providers
//Only works because I used a Ternary in parent to check to see if there was a current user. Once it rendered to have a current
//user, then there is a current user available in child component
  componentDidMount(){
    const userId = this.props.currentUser.id
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(r => r.json())
      .then(clientInfo => {
        this.setState({
          serviceProviders: clientInfo
        })
      })
  }

  render() {
    console.log('hi from ClientApptContainer: ', this.state.serviceProviders.service_providers)
    return (
        <div>
          <h2>Current Bookings:</h2>
          <ul>
            {this.state.serviceProviders.service_providers === undefined ? null : (this.state.serviceProviders.service_providers.map(worker => {
              return <ClientAppointment worker={worker} />})
            )}
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
          //
          // {
          //   this.setState({
          //     serviceProviders: clientInfo.service_providers
          //   }


          // {this.props.appointments === undefined ? null : (
          //     this.props.appointments.map(appointment => <ClientAppointments appointment={appointment}/>)
          // )}


          //{this.state.serviceProviders.service_providers.map(worker => {
              // return <ClientAppointment serviceProvider={worker}/>
            // })}
