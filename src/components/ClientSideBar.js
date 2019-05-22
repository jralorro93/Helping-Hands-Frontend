import React, { Component } from 'react';


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
            <li onClick={this.props.handleClick}>Create a booking</li>
            <li onClick={this.props.handleClick}>Current bookings</li>
            <li onClick={this.props.handleClick}>Settings</li>
          </ul>
        </div>
        <div className='logout'>
          <button onClick={this.props.handleLogout}>Log Out</button>
        </div>
      </div>
    )
  }
}
export default ClientSideBar
