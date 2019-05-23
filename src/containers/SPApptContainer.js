import React, { Component } from 'react';
import { connect } from 'react-redux';
import SPCurrentBookings from '../components/SPCurrentBookings'


class SPApptContainer extends Component {


  render() {
    console.log('this is mapStateToProps: ', this.props)
    return (
      <div>
        <h2>Hi from SPApptContainer</h2>
        <h2>Current bookings:</h2>
        <ul>
          {this.props.currentUser.bookings.map(booking => {
            let client = this.props.currentUser.clients.find(client => client.id === booking.client_id)
            return <SPCurrentBookings booking={booking} client={client} />
          }
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.login.user}
}

export default connect(mapStateToProps)(SPApptContainer)
