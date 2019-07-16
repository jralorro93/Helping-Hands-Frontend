import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

class SPProfileTab extends Component {

  render() {
    console.log('this is currentUser: ', this.props.currentUser.appointments.length)
    let fullName = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name
    return (
      <div>
        <div id='personalInfo'>
          <h1>{fullName}</h1>
          <h3>{this.props.currentUser.email}</h3>
          <Divider />
          <h1>Profession: </h1>
          <h3>{this.props.currentUser.service.job}</h3>
          <p>{this.props.currentUser.service.description}</p>
          <p>{this.props.currentUser.service.availability}</p>
          <Divider />
          <h1>Bookings: </h1>
          <h4>Number of bookings: {this.props.currentUser.appointments.length}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.login.user }
}

export default connect(mapStateToProps)(SPProfileTab)
