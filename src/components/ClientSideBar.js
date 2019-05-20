import React, { Component } from 'react';
import NewBookingContainer from '../containers/NewBookingContainer'

class ClientSideBar extends Component{
  render() {
    return (
      <div>
        <div className="profileSideBar">
          Client Side Side Bar
          Welcome to HH!
          Pic here
        </div>
        <div className="bookingOptions">
          <ul>
            <li> Make a booking </li>
            <li> Current bookings </li>
            <li> Settings </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ClientSideBar
