import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react'

class ClientProfileTab extends Component {
  render() {
    let fullName = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name
    return (
      <div>
        <div>
          <h1>{fullName}</h1>
          <h3>{this.props.currentUser.email}</h3>
          <Divider />
          <h1>Bookings: </h1>
          <h4>Number of bookings: {this.props.currentUser.appointments.length}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.login.user}
}

export default connect(mapStateToProps)(ClientProfileTab)
